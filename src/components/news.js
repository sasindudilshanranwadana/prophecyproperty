import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./news.module.css"; // Ensure your CSS file path is correct

const News = () => {
  const [news, setNews] = useState([]);
  const apiKey = "11366e547c60447ab9a720caa489b6f3";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything`, {
            params: {
              apiKey: apiKey,
              q: "real estate Victoria Australia", // Filter for real estate news in Victoria, Australia
              language: "en", // English language news
              pageSize: 5, // Limit to 5 articles
              sortBy: "publishedAt" // Sort by latest published
            }
          }
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  if (!news.length) return <p>Loading news...</p>;

  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsList}>
        {news.map((article, index) => (
          <div key={index} className={styles.newsItem}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className={styles.newsImage} />
              )}
              <h4 className={styles.newsTitle}>{article.title}</h4>
              <p className={styles.newsDescription}>{article.description}</p>
              <p className={styles.newsSource}>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
