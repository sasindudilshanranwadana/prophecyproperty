import React, { useEffect, useRef, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Visualisations.module.css";
import { Chart, registerables } from 'chart.js';
import Papa from 'papaparse'; // Import PapaParse for CSV parsing

Chart.register(...registerables);

const Visualisations = () => {
  const roomsChartRef = useRef(null);
  const priceVsAreaChartRef = useRef(null);
  const priceBySuburbChartRef = useRef(null);

  const [roomsByRegionData, setRoomsByRegionData] = useState([]);
  const [priceVsAreaData, setPriceVsAreaData] = useState([]);
  const [priceBySuburbData, setPriceBySuburbData] = useState([]);

  // Use fetch to load CSV files and parse them
  useEffect(() => {
    // 1. Load Rooms by Region CSV from public folder
    fetch('/Rooms_by_Region.csv')
      .then(response => response.text())
      .then(csvText => {
        const results = Papa.parse(csvText, { header: true });
        console.log("Rooms by Region Data:", results.data);
        setRoomsByRegionData(results.data);
      })
      .catch(err => console.error("Error loading Rooms_by_Region.csv", err));

    // 2. Load Price vs Building Area CSV from public folder
    fetch('/Price_vs_Building_Area.csv')
      .then(response => response.text())
      .then(csvText => {
        const results = Papa.parse(csvText, { header: true });
        console.log("Price vs Building Area Data:", results.data);
        setPriceVsAreaData(results.data);
      })
      .catch(err => console.error("Error loading Price_vs_Building_Area.csv", err));

    // 3. Load Price by Suburb CSV from public folder
    fetch('/Price_by_Suburb.csv')
      .then(response => response.text())
      .then(csvText => {
        const results = Papa.parse(csvText, { header: true });
        console.log("Price by Suburb Data:", results.data);
        setPriceBySuburbData(results.data);
      })
      .catch(err => console.error("Error loading Price_by_Suburb.csv", err));
  }, []);

  // Update charts after data is loaded
  useEffect(() => {
    let roomsChart, priceVsAreaChart, priceBySuburbChart;

    // 1. Bar Chart: Average Rooms by Region (Using CSV Data)
    if (roomsByRegionData.length > 0 && roomsChartRef.current) {
      console.log("Rendering Rooms Chart with data:", roomsByRegionData);
      const regionLabels = [...new Set(roomsByRegionData.map(item => item.Regionname))];
      const averageRooms = regionLabels.map(region => {
        const roomsInRegion = roomsByRegionData.filter(item => item.Regionname === region).map(item => parseInt(item.Rooms, 10));
        return roomsInRegion.reduce((sum, rooms) => sum + rooms, 0) / roomsInRegion.length;
      });

      roomsChart?.destroy();
      const ctx1 = roomsChartRef.current.getContext('2d');
      roomsChart = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: regionLabels,
          datasets: [{
            label: 'Average Rooms',
            data: averageRooms,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // 2. Area Chart: Price vs Building Area (Using CSV Data)
    if (priceVsAreaData.length > 0 && priceVsAreaChartRef.current) {
      console.log("Rendering Price vs Area Chart with data:", priceVsAreaData);
      const buildingAreas = priceVsAreaData.map(item => parseFloat(item.BuildingArea));
      const prices = priceVsAreaData.map(item => parseFloat(item.Price));

      priceVsAreaChart?.destroy();
      const ctx2 = priceVsAreaChartRef.current.getContext('2d');
      priceVsAreaChart = new Chart(ctx2, {
        type: 'line',
        data: {
          labels: buildingAreas, // Building Areas on X-axis
          datasets: [{
            label: 'Price ($)',
            data: prices, // Prices for each building area
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Fill the area
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true, // Fills the area under the line
            tension: 0.3, // Smoothing effect
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Building Area (sqm)'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Price ($)'
              },
              beginAtZero: false
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  return `Price: $${context.raw.toLocaleString()}`;
                }
              }
            }
          }
        }
      });
    }

    // 3. Bar Chart: Average Price by Suburb (Using CSV Data)
    if (priceBySuburbData.length > 0 && priceBySuburbChartRef.current) {
      console.log("Rendering Price by Suburb Chart with data:", priceBySuburbData);
      const suburbLabels = [...new Set(priceBySuburbData.map(item => item.Suburb))];
      const averagePrices = suburbLabels.map(suburb => {
        const pricesInSuburb = priceBySuburbData.filter(item => item.Suburb === suburb).map(item => parseFloat(item.Price));
        return pricesInSuburb.reduce((sum, price) => sum + price, 0) / pricesInSuburb.length;
      });

      priceBySuburbChart?.destroy();
      const ctx3 = priceBySuburbChartRef.current.getContext('2d');
      priceBySuburbChart = new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: suburbLabels,
          datasets: [{
            label: 'Average Price',
            data: averagePrices,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    // Cleanup charts on component unmount
    return () => {
      roomsChart?.destroy();
      priceVsAreaChart?.destroy();
      priceBySuburbChart?.destroy();
    };
  }, [roomsByRegionData, priceVsAreaData, priceBySuburbData]); // Re-run effect when data changes

  return (
    <div className={styles.visualisations}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.innerWrapper}>
          <div className={styles.title}>
            <h1>Data Visualisations</h1>
          </div>

          {/* Visualization 1: Average Rooms by Region */}
          <div className={styles.visualisationSection}>
            <h2>Average Number of Rooms by Region</h2>
            <p>
              This chart shows the average number of rooms in properties across various regions. By examining this data, 
              we can infer which regions generally have larger properties with more rooms and which regions tend to have smaller properties.
            </p>
            <canvas id="roomsByRegionChart" ref={roomsChartRef}></canvas>
          </div>

          {/* Visualization 2: Price vs Building Area */}
          <div className={styles.visualisationSection}>
            <h2>Price vs Building Area</h2>
            <p>
              This area chart illustrates how property prices change as the building area increases. 
              It gives us a sense of whether larger properties are significantly more expensive, and if there's a clear correlation between price and size.
            </p>
            <canvas id="priceVsBuildingAreaChart" ref={priceVsAreaChartRef}></canvas>
          </div>

          {/* Visualization 3: Average Property Price by Suburb */}
          <div className={styles.visualisationSection}>
            <h2>Average Property Price by Suburb</h2>
            <p>
              This bar chart highlights the average property prices across different suburbs. It helps us understand the cost of properties 
              in various neighborhoods and allows comparison between suburbs. 
              This can guide potential buyers on where to find more affordable properties or highlight premium locations.
            </p>
            <canvas id="priceBySuburbChart" ref={priceBySuburbChartRef}></canvas>
          </div>
          
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Visualisations;

