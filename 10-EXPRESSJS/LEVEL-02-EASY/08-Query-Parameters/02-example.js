const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  // Access values from query parameters
  const { query, limit } = req.query;
  
  res.status(200).json({
    searchQuery: query || "all",
    limitResults: limit || 10,
    timestamp: Date.now()
  });
});