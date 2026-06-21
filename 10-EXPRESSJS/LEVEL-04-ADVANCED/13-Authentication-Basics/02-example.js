const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = []; // Mock DB
const JWT_SECRET = "super_secret_key";

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Salt factor 10
  users.push({ username, password: hashedPassword });
  res.status(201).send("Registered successfully!");
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send("User not found");

  const isMatch = await bcrypt.compare(password, user.password); // Compare inputs
  if (!isMatch) return res.status(401).send("Incorrect password");

  // Sign Token
  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});