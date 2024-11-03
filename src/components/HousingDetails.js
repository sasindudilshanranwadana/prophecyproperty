import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import your Firestore configuration
import styles from "./HousingDetails.module.css";

const HousingDetails = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHousingDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const querySnapshot = await getDocs(collection(db, "properties"));
      const allProperties = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Fetch the first 5 properties
      const firstFiveProperties = allProperties.slice(0, 5);
      setProperties(firstFiveProperties);
      console.log("Fetched properties:", firstFiveProperties); // Debugging output

    } catch (err) {
      console.error("Error fetching housing details:", err);
      setError("Failed to load housing listings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHousingDetails();
  }, []);

  return (
    <div className={styles.housingContainer}>
      {loading ? (
        <p>Loading housing listings...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <div className={styles.housingList}>
          {properties.map(property => (
            <div key={property.id} className={styles.housingItem}>
              <img
                src={property["Image URL"]} // Use the image URL from Firestore
                alt={`Street view of ${property.Address}`}
                className={styles.housingImage}
                onError={(e) => {
                  e.target.src = "/placeholder-image.jpg"; // Fallback image if loading fails
                }}
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
