import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../firebaseConfig";  // Ensure Firebase is configured
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import styles from "./HousingDetails.module.css";

const HousingDetails = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loadFromJSON = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/properties.json");

      if (!response.ok) throw new Error("Failed to fetch properties data");

      const data = await response.json();
      setProperties(data.slice(0, 4));
    } catch (err) {
      console.error("Error loading JSON:", err);
      setError("Failed to load housing listings from JSON.");
    } finally {
      setLoading(false);
    }
  };

  // Function to record clicked property in Firestore
  const recordClickedProperty = async (property) => {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        clickedProperties: arrayUnion(property.Address)  // Use property ID or Address as needed
      });
    }
  };

  const handlePropertyClick = (property) => {
    recordClickedProperty(property);  // Track the click in Firestore
    navigate("/search-reasult-buy", { state: { property } });
  };

  useEffect(() => {
    loadFromJSON();
  }, []);

  return (
    <div className={styles.housingContainer}>
      {loading ? (
        <p>Loading housing listings...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <div className={styles.housingList}>
          {properties.map((property, index) => (
            <div
              key={index}
              className={styles.housingItem}
              onClick={() => handlePropertyClick(property)}
            >
              <img
                src={property["Image URL"] || "/placeholder-image.jpg"}
                alt={`Street view of ${property.Address}`}
                className={styles.housingImage}
              />
              <div className={styles.housingDetails}>
                <h4 className={styles.housingAddress}>{property.Address}</h4>
                <p className={styles.housingInfo}>
                  {property.Bedrooms} beds • {property.Bathrooms} baths
                </p>
                <p className={styles.housingPrice}>Price: {property.Price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HousingDetails;
