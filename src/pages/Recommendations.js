import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Recommendations.module.css";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch("/searchTerms.json"); // Replace with actual path to JSON file
        const data = await response.json();
        setRecommendations(data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className={styles.recommendationsPage}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className={styles.contentWrapper}>
        <section className={styles.introSection}>
          <h2 className={styles.pageTitle}>Personalized Property Recommendations</h2>
          <p className={styles.pageDescription}>
            Discover properties selected just for you based on your recent searches and preferences:
          </p>
          <ul className={styles.bulletPoints}>
            <li>💼 <strong>Curated Listings:</strong> Properties matched to your location and budget.</li>
            <li>📍 <strong>Nearby Locations:</strong> Recommendations within a 5km radius of your recent searches.</li>
            <li>📈 <strong>Best Price Options:</strong> Our AI picks properties with optimal price points.</li>
            <li>🏠 <strong>Similar Amenities:</strong> Listings with amenities similar to those you've explored.</li>
          </ul>
        </section>

        <section className={styles.recommendationsSection}>
          <h3 className={styles.recommendationsTitle}>Top Picks for You</h3>
          <div className={styles.recommendationsList}>
            {loading ? (
              <p>Loading your top recommendations...</p>
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
                    <p className={styles.housingPrice}>Price: {property.Price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noSearchMessage}>
                No recent searches found. Please start a search to receive personalized recommendations.
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Recommendations;
