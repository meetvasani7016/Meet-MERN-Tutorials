// Express.js Cheat Sheet
const express = require('express');
const app = express();
app.use(express.json()); // Body Parser Middleware

// GET Endpoint with parameters
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id; // path parameter
  const searchFilter = req.query.filter; // query parameter
  res.status(200).json({ userId, searchFilter });
});

// POST Endpoint
app.post('/api/users', (req, res) => {
  const { name, email } = req.body; // request body
  res.status(201).json({ created: { name, email } });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});