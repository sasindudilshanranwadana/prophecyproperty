// PriceComparison.js
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import styles from "./PriceComparison.module.css";

const PriceComparison = () => {
  const [cityAverageData, setCityAverageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to parse price string to a number
  const parsePrice = (priceString) => {
    if (typeof priceString !== 'string') return 0;
    let numericValue = parseFloat(priceString.replace(/[^0-9.]/g, ''));
    if (priceString.includes('M')) {
      numericValue *= 1000000;
    } else if (priceString.includes('K')) {
      numericValue *= 1000;
    }
    return numericValue;
  };

  useEffect(() => {
    const fetchCityAveragePrices = async () => {
      setLoading(true);
      setError(null);

      try {
        const cityData = {}; // To store total prices and counts for each city

        const propertiesQuery = collection(db, "properties");
        const querySnapshot = await getDocs(propertiesQuery);

        querySnapshot.forEach((doc) => {
          const { City, Price } = doc.data();
          const parsedPrice = parsePrice(Price);

          if (!cityData[City]) {
            cityData[City] = { total: 0, count: 0 };
          }
          cityData[City].total += parsedPrice;
          cityData[City].count += 1;
        });

        const cityAverageData = Object.keys(cityData).map((city) => ({
          city,
          averagePrice: cityData[city].count > 0 ? cityData[city].total / cityData[city].count : 0,
        }));

        setCityAverageData(cityAverageData);
      } catch (error) {
        setError(`Error fetching property prices: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCityAveragePrices();
  }, []);

  // Define an array of colors for the bars
  const colors = [
    "rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)",
    "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(231, 76, 60, 0.6)",
    "rgba(46, 204, 113, 0.6)", "rgba(241, 196, 15, 0.6)", "rgba(52, 152, 219, 0.6)",
    "rgba(155, 89, 182, 0.6)", "rgba(52, 73, 94, 0.6)", "rgba(26, 188, 156, 0.6)"
  ];

  // Prepare data for the bar chart
  const chartData = {
    labels: cityAverageData.map((data) => data.city),
    datasets: [
      {
        data: cityAverageData.map((data) => data.averagePrice),
        backgroundColor: cityAverageData.map((_, index) => colors[index % colors.length]),
        borderColor: cityAverageData.map((_, index) => colors[index % colors.length].replace("0.6", "1")),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "City",
        },
        grid: {
          display: false,
        },
        barThickness: 30, // Set bar thickness to increase width
      },
      y: {
        title: {
          display: true,
          text: "Average Price (in AUD)",
        },
        beginAtZero: false,
        suggestedMin: 100000,
        suggestedMax: 2000000,
      },
    },
  };

  return (
    <div className={styles.priceComparisonPage}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.introSection}>
          <h2 className={styles.pageTitle}>Average Property Prices by City</h2>
          <p className={styles.pageDescription}>
            Explore the average property prices across various cities.
          </p>
        </section>

        <section className={styles.chartSection} style={{ height: '700px', width: '100%' }}>
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p className={styles.error}>{error}</p>
          ) : (
            <Bar data={chartData} options={options} />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PriceComparison;
