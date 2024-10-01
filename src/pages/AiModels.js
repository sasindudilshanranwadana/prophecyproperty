import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Visualisations.module.css";

const AiModels = () => {
  const [userInputs, setUserInputs] = useState({
    buildingArea: '',
    rooms: '',
    price: ''
  });
  const [modelResults, setModelResults] = useState({
    predictedPriceLinear: null,
    predictedPriceRF: null,
    classificationLogistic: null,
    classificationSVM: null,
    cluster: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch linear regression price prediction
    fetch('http://localhost:5000/predict_price_linear', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buildingArea: userInputs.buildingArea })
    })
      .then(response => response.json())
      .then(data => setModelResults(prev => ({ ...prev, predictedPriceLinear: data.predicted_price.toFixed(2) }))); // Rounded

    // Fetch random forest price prediction
    fetch('http://localhost:5000/predict_price_rf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buildingArea: userInputs.buildingArea })
    })
      .then(response => response.json())
      .then(data => setModelResults(prev => ({ ...prev, predictedPriceRF: data.predicted_price.toFixed(2) }))); // Rounded

    // Fetch logistic regression property classification
    fetch('http://localhost:5000/classify_property_logistic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rooms: userInputs.rooms })
    })
      .then(response => response.json())
      .then(data => setModelResults(prev => ({ ...prev, classificationLogistic: data.classification }))); // Classification is not rounded

    // Fetch SVM property classification
    fetch('http://localhost:5000/classify_property_svm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rooms: userInputs.rooms })
    })
      .then(response => response.json())
      .then(data => setModelResults(prev => ({ ...prev, classificationSVM: data.classification }))); // Classification is not rounded

    // Fetch K-Means clustering
    fetch('http://localhost:5000/cluster_property', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buildingArea: userInputs.buildingArea, price: userInputs.price })
    })
      .then(response => response.json())
      .then(data => setModelResults(prev => ({ ...prev, cluster: data.cluster.toFixed(2) }))); // Rounded cluster number
  };

  return (
    <div className={styles.visualisations}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.innerWrapper}>
          <div className={styles.title}>
            <h1>AI Models: Interact with the Data</h1>
          </div>

          {/* Form for User Input */}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Building Area (sqm):</label>
              <input
                type="number"
                name="buildingArea"
                value={userInputs.buildingArea}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Number of Rooms:</label>
              <input
                type="number"
                name="rooms"
                value={userInputs.rooms}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Price ($):</label>
              <input
                type="number"
                name="price"
                value={userInputs.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Get Results</button>
          </form>

          {/* Display Model Results with Rounded Values */}
          <div className={styles.results}>
            <h2>Model Results</h2>
            {modelResults.predictedPriceLinear && (
              <p>
                Linear Regression Predicted Price: ${modelResults.predictedPriceLinear} &nbsp;
                This model estimates the price based on the building area, assuming a direct relationship between the size of the property and its value.
              </p>
            )}
            {modelResults.predictedPriceRF && (
              <p>
                Random Forest Predicted Price: ${modelResults.predictedPriceRF} &nbsp;
                This model uses multiple decision trees and provides a more complex understanding of the property value based on the building area.
              </p>
            )}
            {modelResults.classificationLogistic && (
              <p>
                Logistic Regression Classification: {modelResults.classificationLogistic} &nbsp;
                Based on the number of rooms, this model classifies the property as {modelResults.classificationLogistic}. It works by calculating the probability that a property belongs to a certain category.
              </p>
            )}
            {modelResults.classificationSVM && (
              <p>
                SVM Classification: {modelResults.classificationSVM} &nbsp;
                The Support Vector Machine classifies your property into {modelResults.classificationSVM} using advanced classification techniques, ensuring a good separation between property types.
              </p>
            )}
            {modelResults.cluster && (
              <p>
                K-Means Cluster: {modelResults.cluster} &nbsp;
                This model groups your property into cluster {modelResults.cluster}, which means it shares characteristics with other similar properties based on area and price.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiModels;
