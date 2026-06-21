const express = require('express');
const app = express();
app.use(express.json());

// Custom validator middleware
const validateUser = (req, res, next) => {
  const { username, email } = req.body;
  if (!username || username.length < 3) {
    return res.status(400).json({ error: "Username must be at least 3 characters long" });
  }
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: "Valid email is required" });
  }
  next();
};

app.post('/api/users', validateUser, (req, res) => {
  res.send("Payload validated. Saving to database.");
});