const express = require('express');
const app = express();

// Custom Logger Middleware
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
  next(); // Pass to next handler in pipeline
};

app.use(requestLogger);

app.get('/dashboard', (req, res) => {
  res.send("Dashboard Panel Data");
});