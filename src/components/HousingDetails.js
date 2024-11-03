import React, { useEffect, useState } from "react";
import { collection, query, limit, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import styles from "./HousingDetails.module.css";

const HousingDetails = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHousingDetails = async () => {
      try {
        const q = query(collection(db, "properties"), limit(4)); // Limit to 4 items
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const fetchedProperties = querySnapshot.docs.map((doc) => doc.data());
          setProperties(fetchedProperties);
          console.log("Fetched properties:", fetchedProperties);
        } else {
          console.log("No documents found in properties collection.");
        }
      } catch (error) {
        console.error("Error fetching housing details from Firestore:", error);
        setError("Error fetching housing details");
      } finally {
        setLoading(false);
      }
    };

    fetchHousingDetails();
  }, []);

  if (loading) return <p>Loading housing listings...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.housingContainer}>
      <div className={styles.housingList}>
        {properties.map((property, index) => (
          <div key={index} className={styles.housingItem}>
            <img
              src={property["Image URL"] || "https://via.placeholder.com/400x300"}
              alt={`Street view of ${property.Address}`}
              className={styles.housingImage}
            />
            <div className={styles.housingDetails}>
              <h4 className={styles.housingAddress}>{property.Address}</h4>
              <p className={styles.housingPrice}>{property.Description}</p>
              <p className={styles.housingInfo}>
                {property.Bedrooms} beds • {property.Bathrooms} baths
              </p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
    
  );
};

export default HousingDetails;
