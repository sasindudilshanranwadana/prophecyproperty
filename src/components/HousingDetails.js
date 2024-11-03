import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import styles from "./HousingDetails.module.css";

// Function to get a random sample of n items from an array
function getRandomSample(arr, n) {
  const result = [];
  const taken = new Array(arr.length);
  while (result.length < n) {
    const x = Math.floor(Math.random() * arr.length);
    if (!taken[x]) {
      result.push(arr[x]);
      taken[x] = true;
    }
  }
  return result;
}

const HousingDetails = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHousingDetails = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "housingData"));
        const allProperties = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        // Select 5 random properties from all available documents
        const randomProperties = getRandomSample(allProperties, 5);
        setProperties(randomProperties);
      } catch (error) {
        console.error("Error fetching housing details from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHousingDetails();
  }, []); // Fetch only once on component mount

  return (
    <div className={styles.housingContainer}>
      <h3 className={styles.housingHeader}>Featured Housing Listings</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.housingList}>
          {properties.map((property) => (
            <div key={property.id} className={styles.housingItem}>
              <img
                src={`https://maps.googleapis.com/maps/api/streetview?size=400x300&location=${property.latitude},${property.longitude}&fov=80&heading=70&pitch=0&key=YOUR_GOOGLE_MAPS_API_KEY`}
                alt={`Street view of ${property.address}`}
                className={styles.housingImage}
              />
              <div className={styles.housingDetails}>
                <h4 className={styles.housingAddress}>{property.address}</h4>
                <p className={styles.housingPrice}>{property.price}</p>
                <p className={styles.housingInfo}>
                  {property.bedrooms} beds • {property.bathrooms} baths
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HousingDetails;
