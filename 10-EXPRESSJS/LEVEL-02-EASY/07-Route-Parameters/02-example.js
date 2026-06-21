const express = require('express');
const app = express();

const database = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

app.get('/users/:userId', (req, res) => {
  // Capture route param and parse to integer
  const idQuery = parseInt(req.params.userId);
  const user = database.find(u => u.id === idQuery);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User record not found" });
  }
});