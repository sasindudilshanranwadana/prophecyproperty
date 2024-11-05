import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import styles from "./Recommendations.module.css";

// Haversine formula to calculate distance between two coordinates
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async (userId) => {
      try {
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
          setError("User data not found");
          setLoading(false);
          return;
        }

        const clickedProperties = userDoc.data().clickedProperties || [];
        const recommendationsList = [];

        for (const address of clickedProperties) {
          const propertyQuery = query(collection(db, "properties"), where("Address", "==", address));
          const propertySnapshot = await getDocs(propertyQuery);

          for (const propertyDoc of propertySnapshot.docs) {
            const { Latitude: lat1, Longitude: lon1, Bedrooms, Bathrooms, Price } = propertyDoc.data();

            const nearbyQuery = query(collection(db, "properties"));
            const nearbySnapshot = await getDocs(nearbyQuery);

            nearbySnapshot.forEach((doc) => {
              const propertyData = doc.data();
              const { Latitude: lat2, Longitude: lon2 } = propertyData;
              const distance = calculateDistance(lat1, lon1, lat2, lon2);

              if (distance <= 5) {
                recommendationsList.push({
                  ...propertyData,
                  distance,
                  priceDifference: Math.abs(Price - propertyData.Price),
                  match: Math.abs(Bedrooms - propertyData.Bedrooms) + Math.abs(Bathrooms - propertyData.Bathrooms)
                });
              }
            });
          }
        }

        const sortedRecommendations = recommendationsList
          .sort((a, b) => a.priceDifference - b.priceDifference || a.match - b.match || a.distance - b.distance)
          .slice(0, 4);

        setRecommendations(sortedRecommendations);
      } catch (error) {
        setError(`Error fetching recommendations: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchRecommendations(user.uid);
      } else {
        setError("User is not logged in.");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.recommendationsPage}>
      <Header />
      <main className={styles.contentWrapper}>
        <section className={styles.introSection}>
          <h2 className={styles.pageTitle}>Personalized Property Recommendations</h2>
          <p className={styles.pageDescription}>
            Discover properties selected just for you based on your recent searches and preferences:
          </p>
        </section>

        <section className={styles.recommendationsSection}>
          <h3 className={styles.recommendationsTitle}>Top Picks for You</h3>
          <div className={styles.recommendationsList}>
            {loading ? (
              <p>Loading your top recommendations...</p>
            ) : error ? (
              <p className={styles.error}>{error}</p>
            ) : recommendations.length > 0 ? (
              recommendations.map((property, index) => (
                <div key={index} className={styles.recommendationItem}>
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
                    <p className={styles.housingPrice}>Price: ${property.Price.toLocaleString()}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No recommendations available at the moment.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Recommendations;
