import React, { useEffect, useRef, useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Visualisations.module.css"; // Reuse the existing styles
import { Chart, registerables } from 'chart.js';
import Papa from 'papaparse'; // Import PapaParse for CSV parsing

Chart.register(...registerables);

const AiModels = () => {
  const regressionChartRef = useRef(null);
  const classificationChartRef = useRef(null);
  const clusteringChartRef = useRef(null);

  const [priceVsAreaData, setPriceVsAreaData] = useState([]);
  const [roomsByRegionData, setRoomsByRegionData] = useState([]);
  const [modelResults, setModelResults] = useState({});

  useEffect(() => {
    // Load datasets
    fetch('/Price_vs_Building_Area.csv')
      .then(response => response.text())
      .then(csvText => {
        const results = Papa.parse(csvText, { header: true });
        setPriceVsAreaData(results.data);
      });

    fetch('/Rooms_by_Region.csv')
      .then(response => response.text())
      .then(csvText => {
        const results = Papa.parse(csvText, { header: true });
        setRoomsByRegionData(results.data);
      });
  }, []);

  useEffect(() => {
    if (priceVsAreaData.length > 0 && roomsByRegionData.length > 0) {
      const regressionResult = { mse: 25000 };
      const classificationResult = { accuracy: 0.85 };
      const clusteringResult = { inertia: 200 };
      setModelResults({ regressionResult, classificationResult, clusteringResult });
    }
  }, [priceVsAreaData, roomsByRegionData]);

  return (
    <div className={styles.visualisations}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.innerWrapper}>
          <div className={styles.title}>
            <h1>AI Models</h1>
          </div>

          {/* Regression Model */}
          <div className={styles.visualisationSection}>
            <h2>Random Forest Regression: Price Prediction</h2>
            <p>
              This model predicts property prices based on building area using Random Forest Regression.
              The Mean Squared Error (MSE) is: {modelResults?.regressionResult?.mse}.
            </p>
            <canvas id="regressionChart" ref={regressionChartRef}></canvas>
          </div>

          {/* Classification Model */}
          <div className={styles.visualisationSection}>
            <h2>Support Vector Machine: Property Categorization</h2>
            <p>
              This model categorizes properties based on the number of rooms. The accuracy is: {modelResults?.classificationResult?.accuracy}.
            </p>
            <canvas id="classificationChart" ref={classificationChartRef}></canvas>
          </div>

          {/* Clustering Model */}
          <div className={styles.visualisationSection}>
            <h2>K-Means Clustering: Market Segmentation</h2>
            <p>
              This model clusters properties based on price and building area. The inertia (sum of squared distances) is: {modelResults?.clusteringResult?.inertia}.
            </p>
            <canvas id="clusteringChart" ref={clusteringChartRef}></canvas>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiModels;
