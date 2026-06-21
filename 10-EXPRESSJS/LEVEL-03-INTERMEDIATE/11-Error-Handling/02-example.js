const express = require('express');
const app = express();

app.get('/bug', (req, res, next) => {
  try {
    throw new Error("Something went wrong inside the server");
  } catch (err) {
    next(err); // Passes the error to the global handler
  }
});

// Global Error Handler Middleware (MUST have 4 arguments)
app.use((err, req, res, next) => {
  console.error("Intercepted Error:", err.message);
  res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error"
  });
});