import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth } from "../firebaseConfig";
import styles from "./PriceTrend.module.css";

const PriceTrend = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [predictedPrices, setPredictedPrices] = useState([]);

  const fetchPriceTrend = async () => {
    setLoading(true);
    setError(null);
    
    const user = auth.currentUser;
    if (!user) {
      setError("User is not logged in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/predict/price-trend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Predicted prices:", data.predicted_prices);  // Debugging line
      setPredictedPrices(data.predicted_prices);
    } catch (error) {
      console.error("Error fetching price trend:", error);
      setError(`Error fetching price trend: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPriceTrend();
  };

  return (
    <div className={styles.priceTrendPage}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.introSection}>
          <h2 className={styles.pageTitle}>Price Trend Prediction</h2>
          <button onClick={fetchPriceTrend} className={styles.submitButton}>Get Price Trend</button>
          {loading && <p>Loading...</p>}
          {error && <p className={styles.error}>{error}</p>}
        </section>

        <section className={styles.resultsSection}>
          {predictedPrices.length > 0 && (
            <div className={styles.predictionResults}>
              <h3>Predicted Prices:</h3>
              <ul>
                {predictedPrices.map((price, index) => (
                  <li key={index}>Year {index + 1}: ${price.toFixed(2)}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PriceTrend;
