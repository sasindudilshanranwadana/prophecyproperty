import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./news.module.css";

const API_KEY = "17c01c3c77b84b5484289abfea1657ba"; // Replace with your actual News API key
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=real%20estate%20housing%20market%20Victoria%20Australia&apiKey=${API_KEY}&sortBy=publishedAt`;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(NEWS_API_URL);
        setArticles(response.data.articles.slice(0, 4)); // Limit to 4 articles
      } catch (err) {
        setError("Failed to fetch news articles");
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className={styles.newsContainer}>
      {loading ? (
        <p>Loading news...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <div className={styles.newsList}>
          {articles.map((article, index) => (
            <div key={index} className={styles.newsItem}>
              <img
                src={article.urlToImage || "/placeholder-image.jpg"}
                alt={article.title}
                className={styles.newsImage}
              />
              <div className={styles.newsContent}>
                <h4 className={styles.newsTitle}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                </h4>
                <p className={styles.newsDescription}>{article.description}</p>
                <p className={styles.newsTime}>Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
