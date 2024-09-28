import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Visualisations.module.css";

const AiModels = () => {
  return (
    <div className={styles.visualisations}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.innerWrapper}>
          <div className={styles.title}>
            <h1>AI Models</h1>
          </div>

          {/* Displaying Images from the public folder */}
          <div className={styles.visualisationSection}>
            <h2>Random Forest Regression Output</h2>
            <img src="/Screenshot 2024-09-29 013457.png" alt="Random Forest Output" />
          </div>

          <div className={styles.visualisationSection}>
            <h2>SVM Property Categorization Output</h2>
            <img src="/Screenshot 2024-09-29 013426.png" alt="SVM Output" />
          </div>

          <div className={styles.visualisationSection}>
            <h2>K-Means Clustering Output</h2>
            <img src="/Figure_1.png" alt="K-Means Clustering Output" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiModels;
