import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebaseConfig';
import { collection, query, where, limit, onSnapshot } from 'firebase/firestore';
import styles from "./Container.module.css";

const Container = ({ className = "" }) => {
  const [queryText, setQueryText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce function to limit Firestore calls
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch suggestions from Firestore
  const fetchSuggestions = useCallback(
    debounce((inputQuery) => {
      if (inputQuery.length > 1) {
        setLoading(true);
        setError(null);

        const lowercaseQuery = inputQuery.toLowerCase();

        console.log(`Searching Firestore for keywords containing: ${lowercaseQuery}`);

        // Firestore query for partial matches on `searchKeywords`
        const propertiesRef = collection(db, 'properties');
        const q = query(
          propertiesRef,
          where("searchKeywords", "array-contains", lowercaseQuery),
          limit(10)
        );

        const unsubscribe = onSnapshot(
          q,
          (querySnapshot) => {
            const results = querySnapshot.docs.map((doc) => doc.data());
            console.log("Query results:", results); // Debugging output
            setSuggestions(results);
            setLoading(false);
          },
          (err) => {
            console.error("Error fetching suggestions:", err);
            setError("Failed to load results. Please try again.");
            setLoading(false);
          }
        );

        return () => unsubscribe();
      } else {
        setSuggestions([]);
      }
    }, 300), []
  );

  // Handle input change and fetch suggestions
  const handleQueryChange = (e) => {
    const inputQuery = e.target.value;
    setQueryText(inputQuery);
    fetchSuggestions(inputQuery);
  };

  return (
    <div className={[styles.container, className].join(" ")}>
      <div className={styles.buttonDialogSelectSuburb}>
        <input
          className={styles.margin}
          placeholder="Search suburb, postcode, or state"
          type="text"
          value={queryText}
          onChange={handleQueryChange}
        />
      </div>
      
      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((property, index) => (
            <li key={index} className={styles.suggestionItem}>
              <span className={styles.address}>{property.Address}</span>
              <span className={styles.price}>{property.Price}</span>
            </li>
          ))}
        </ul>
      )}

      {loading && <p>Loading results...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
