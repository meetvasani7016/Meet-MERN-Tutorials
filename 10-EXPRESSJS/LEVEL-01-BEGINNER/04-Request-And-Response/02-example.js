const express = require('express');
const app = express();

// Crucial middleware: parses incoming JSON bodies
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body; // Extract body parameters
  
  if (username === 'admin' && password === '1234') {
    res.status(200).json({ success: true, token: "session_token_xyz" });
  } else {
    res.status(401).json({ success: false, error: "Incorrect credentials" });
  }
});