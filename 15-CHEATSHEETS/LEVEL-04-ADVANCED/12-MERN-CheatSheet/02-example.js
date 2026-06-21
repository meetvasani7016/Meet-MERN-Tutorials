// MERN Full-Stack Setup Cheat Sheet
// --- server.js ---
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// CORS whitelist setup
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connected"))
  .catch(err => console.error(err));

// API router link
app.use('/api/data', require('./routes/api'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);