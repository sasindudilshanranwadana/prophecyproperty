// PriceSimulation.js
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHome, FaMapMarkerAlt, FaBed } from "react-icons/fa"; // Icons for Property Type, Location, Bedrooms
import styles from "./PriceSimulation.module.css";

const propertyTypes = ["House", "Apartment", "Townhouse"];
const locations = {
  "City Center": 1.2,
  Suburbs: 1.0,
  "Outskirts": 0.8,
};
const basePrices = {
  House: 600000,
  Apartment: 400000,
  Townhouse: 500000,
};

const interestRate = 0.05 / 12;
const loanTermMonths = 30 * 12;

const PriceSimulation = () => {
  const [propertyType, setPropertyType] = useState("House");
  const [location, setLocation] = useState("Suburbs");
  const [bedrooms, setBedrooms] = useState(3);

  const calculatePrice = () => {
    const basePrice = basePrices[propertyType];
    const locationMultiplier = locations[location];
    const bedroomMultiplier = 1 + (bedrooms - 3) * 0.1;
    return Math.round(basePrice * locationMultiplier * bedroomMultiplier);
  };

  const calculateMortgage = (principal) => {
    return Math.round(
      (principal * interestRate * Math.pow(1 + interestRate, loanTermMonths)) /
      (Math.pow(1 + interestRate, loanTermMonths) - 1)
    );
  };

  const simulatedPrice = calculatePrice();
  const estimatedMortgage = calculateMortgage(simulatedPrice);

  return (
    <div className={styles.priceSimulationPage}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.introSection}>
          <h2 className={styles.pageTitle}>Property Price Simulation</h2>
          <p className={styles.pageDescription}>
            Adjust the factors below to simulate property prices.
          </p>
        </section>

        <section className={styles.controlsSection}>
          <label className={styles.inputLabel}>
            Property Type:
            <select
              className={styles.selectInput}
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>

          <label className={styles.inputLabel}>
            Location:
            <select
              className={styles.selectInput}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {Object.keys(locations).map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </label>

          <label className={styles.inputLabel}>
            Bedrooms:
            <input
              type="number"
              className={styles.numberInput}
              value={bedrooms}
              onChange={(e) => setBedrooms(Number(e.target.value))}
              min="1"
            />
          </label>
        </section>

        <section className={styles.resultCard}>
          <div className={styles.resultRow}>
            
            <span>Property Type:</span>
            <strong>{propertyType}</strong>
          </div>

          <div className={styles.resultRow}>
            
            <span>Location:</span>
            <strong>{location}</strong>
          </div>

          <div className={styles.resultRow}>
          
            <span>Bedrooms:</span>
            <strong>{bedrooms}</strong>
          </div>

          <div className={styles.resultRow}>
            <span className={styles.priceLabel}>Simulated Price:</span>
            <strong className={styles.simulatedPrice}>${simulatedPrice.toLocaleString()}</strong>
          </div>

          <div className={styles.resultRow}>
            <span className={styles.mortgageLabel}>Estimated Monthly Mortgage:</span>
            <strong className={styles.estimatedMortgage}>${estimatedMortgage.toLocaleString()}</strong>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PriceSimulation;
