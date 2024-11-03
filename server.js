const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3001' })); // Enable CORS for frontend

const API_KEY = "17c01c3c77b84b5484289abfea1657ba"; // Replace with your actual news API key

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: "real estate Victoria Australia",
        apiKey: API_KEY,
        language: "en",
        sortBy: "publishedAt",
        pageSize: 5,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
