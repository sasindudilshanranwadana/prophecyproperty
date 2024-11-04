import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer
import styles from "./SearchReasultBuy.module.css";

const SearchReasultBuy = () => {
  const location = useLocation();
  const property = location.state?.property;

  if (!property) {
    return (
      <div className={styles.container}>
        <Header /> {/* Display header */}
        <div className={styles.content}>
          <p>No property selected.</p>
        </div>
        <Footer /> {/* Display footer */}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header /> {/* Display header */}
      <div className={styles.content}>
        <h2>{property.Address}</h2>
        <div className={styles.propertyDetails}>
          <img
            src={property["Image URL"] || "/placeholder-image.jpg"}
            alt={`Image of ${property.Address}`}
            className={styles.propertyImage}
          />
          <div className={styles.info}>
            <p><strong>Price:</strong> {property.Price}</p>
            <p><strong>Bedrooms:</strong> {property.Bedrooms}</p>
            <p><strong>Bathrooms:</strong> {property.Bathrooms}</p>
            <p><strong>Description:</strong> {property.Description}</p>
          </div>
        </div>
      </div>
      <Footer /> {/* Display footer */}
    </div>
  );
};

export default SearchReasultBuy;
