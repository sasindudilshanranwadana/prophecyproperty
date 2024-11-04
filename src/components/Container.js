import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from "./Container.module.css";

const Container = ({ className = "" }) => {
  const [queryText, setQueryText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Debounce function to control search frequency
  const debounce = (func, delay) => {
    let debounceTimer;
    return function (...args) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    };
  };

  // Fetch data from properties.json with debounced filtering
  const fetchSuggestionsFromJSON = useCallback(
    debounce(async (inputQuery) => {
      if (inputQuery.length > 1) {
        setLoading(true);
        setError(null);

        const lowercaseQuery = inputQuery.toLowerCase();

        try {
          const response = await fetch("/properties.json");

          const data = await response.json();

          const filteredProperties = data.filter((property) =>
            property.Address.toLowerCase().includes(lowercaseQuery)
          ).slice(0, 10); // Limit results to first 10 matches

          setSuggestions(filteredProperties);
        } catch (err) {
          console.error("Error loading JSON:", err);
          setError("Failed to load data from JSON.");
        } finally {
          setLoading(false);
        }
      } else {
        setSuggestions([]);
      }
    }, 300), []
  );

  // Update suggestions on query change
  const handleQueryChange = (e) => {
    const inputQuery = e.target.value;
    setQueryText(inputQuery);
    fetchSuggestionsFromJSON(inputQuery);
  };

  // Navigate to SearchReasultBuy page with selected property data
  const handleSuggestionClick = (property) => {
    navigate("/search-reasult-buy", { state: { property } });
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

      {/* Display suggestions list */}
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((property, index) => (
            <li
              key={index}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(property)}
            >
              <span className={styles.address}>{property.Address}</span>
              <span className={styles.price}>{property.Price}</span>
            </li>
          ))}
        </ul>
      )}

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
