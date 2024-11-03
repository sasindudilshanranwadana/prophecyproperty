import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./News.module.css";

const API_KEY = "11366e547c60447ab9a720caa489b6f3"; // Replace with your actual API key

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace with your actual news API endpoint
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=real%20estate%20Victoria%20Australia&apiKey=${API_KEY}`
        );

        setNews(response.data.articles.slice(0, 5)); // Limit to first 5 news items
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.newsContainer}>
      <h3 className={styles.newsHeader}>Latest Property News</h3>
      <div className={styles.newsList}>
        {news.map((article, index) => (
          <div key={index} className={styles.newsItem}>
            <img src={article.urlToImage || "https://via.placeholder.com/150"} alt={article.title} className={styles.newsImage} />
            <div className={styles.newsDetails}>
              <h4 className={styles.newsTitle}>{article.title}</h4>
              <p className={styles.newsDescription}>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.newsLink}>
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
