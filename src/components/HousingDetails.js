import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import your Firestore configuration
import styles from "./HousingDetails.module.css";

const HousingDetails = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to load data from JSON with retry mechanism
  const loadFromJSON = async () => {
    setLoading(true);
    setError(null);

    const maxRetries = 3;
    let attempts = 0;

    while (attempts < maxRetries) {
      try {
        console.log("Attempting to fetch properties.json...");
        const response = await fetch("/properties.json");

        if (!response.ok) {
          throw new Error("Failed to fetch properties data");
        }

        const data = await response.json();
        console.log("Fetched properties:", data);

        setProperties(data.slice(0, 4)); // Display the first 4 properties
        setLoading(false);
        return; // Exit the function if successful
      } catch (err) {
        attempts += 1;
        console.error(`Attempt ${attempts} failed:`, err);

        if (attempts >= maxRetries) {
          console.error("Error loading JSON after retries:", err);
          setError("Failed to load housing listings from JSON after multiple attempts.");
          loadFromFirestore(); // Fallback to Firestore if JSON fails
          return; // Exit after max retries
        }
      }
    }

    setLoading(false);
  };

  // Fallback function to load data from Firestore
  const loadFromFirestore = async () => {
    console.log("Attempting to fetch properties from Firestore...");
    try {
      const querySnapshot = await getDocs(collection(db, "properties"));
      const firestoreProperties = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched Firestore properties:", firestoreProperties);
      setProperties(firestoreProperties.slice(0, 4)); // Display the first 4 properties
      setLoading(false);
    } catch (err) {
      console.error("Error fetching housing details from Firestore:", err);
      setError("Failed to load housing listings from Firestore as well.");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFromJSON(); // Try loading from JSON first
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
            <div key={index} className={styles.housingItem}>
              <img
                src={property["Image URL"] || "/placeholder-image.jpg"} // Use fallback image if missing
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
