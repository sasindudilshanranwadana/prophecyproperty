import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './SearchReasultBuy.module.css';

const SearchReasultBuy = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract property data from location state
    const property = location.state?.property;
    console.log("Property data received in SearchReasultBuy:", property);  // Debugging line

    // Redirect to home if no property is found
    if (!property) {
        return (
            <div className={styles.noProperty}>
                <Header />
                <p>No property selected. Please go back and choose a property from the listings.</p>
                <button onClick={() => navigate("/")}>Back to Home</button>
                <Footer />
            </div>
        );
    }

    return (
        <div className={styles.propertyPage}>
            <Header />
            <div className={styles.propertyDetails}>
                <h2 className={styles.propertyTitle}>{property.Address}</h2>
                <img 
                    src={property["Image URL"] || "/placeholder-image.jpg"} 
                    alt={`Street view of ${property.Address}`} 
                    className={styles.propertyImage} 
                />
                <div className={styles.propertyInfo}>
                    <p><strong>Price:</strong> {property.Price}</p>
                    <p><strong>Bedrooms:</strong> {property.Bedrooms}</p>
                    <p><strong>Bathrooms:</strong> {property.Bathrooms}</p>
                    <p><strong>Description:</strong> {property.Description || "No description available."}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchReasultBuy;
