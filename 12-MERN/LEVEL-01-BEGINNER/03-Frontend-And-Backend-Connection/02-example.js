// --- server/server.js ---
const express = require('express');
const cors = require('cors');
const app = express();

// Enable requests only from React client
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/api/greet', (req, res) => {
  res.json({ message: "Hello React!" });
});

app.listen(5000);