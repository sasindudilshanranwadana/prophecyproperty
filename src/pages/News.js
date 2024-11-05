import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./News.module.css";

const API_KEY = "17c01c3c77b84b5484289abfea1657ba";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: "real estate Victoria Australia",
            apiKey: API_KEY,
            language: "en",
            sortBy: "publishedAt",
            pageSize: 5,
          },
          headers: {
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0", // Mimics a browser request
          },
        });

        if (response.status === 200) {
          setArticles(response.data.articles);
        } else {
          throw new Error("Failed to fetch news.");
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className={styles.newsContainer}>
      <h3 className={styles.newsHeader}>Latest Real Estate News</h3>
      {loading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <div className={styles.newsList}>
          {articles.map((article, index) => (
            <div key={index} className={styles.newsItem}>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className={styles.newsImage}
                />
              )}
              <div className={styles.newsContent}>
                <h4 className={styles.newsTitle}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h4>
                <p className={styles.newsDescription}>{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
