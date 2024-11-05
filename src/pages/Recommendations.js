import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth, db } from "../firebaseConfig"; // Ensure Firebase is configured
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore"; // Firestore functions for querying
import styles from "./Recommendations.module.css";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async (userId) => {
      try {
        console.log("Fetching recommendations for user:", userId);

        // Fetch the user's clicked properties from Firestore
        const userDocRef = db.collection("users").doc(userId);
        const userDoc = await userDocRef.get();

        if (!userDoc.exists) {
          setError("User data not found");
          setLoading(false);
          return;
        }

        const userData = userDoc.data();
        const clickedProperties = userData.clickedProperties || [];

        const recommendationsList = [];

        // Query Firestore for each clicked property to fetch similar properties
        for (const address of clickedProperties) {
          const propertiesQuery = query(
            collection(db, "properties"),
            where("Address", "==", address)
          );

          const querySnapshot = await getDocs(propertiesQuery);
          querySnapshot.forEach((doc) => {
            const propertyData = doc.data();
            recommendationsList.push(propertyData);
          });
        }

        // Sort recommendations by price in ascending order and limit to top 4
        const sortedRecommendations = recommendationsList
          .sort((a, b) => a.Price - b.Price)
          .slice(0, 4);

        setRecommendations(sortedRecommendations);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setError(`Error fetching recommendations: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    // Monitor user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchRecommendations(user.uid);
      } else {
        setError("User is not logged in.");
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Clean up listener on component unmount
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
