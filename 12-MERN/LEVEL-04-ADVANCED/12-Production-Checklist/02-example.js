const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();

// 1. Secure HTTP headers
app.use(helmet());

// 2. Configure rate limits (max 100 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP."
});
app.use('/api/', limiter);