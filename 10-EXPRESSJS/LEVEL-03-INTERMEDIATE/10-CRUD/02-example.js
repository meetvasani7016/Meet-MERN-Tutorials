const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// 1. READ ALL
app.get('/api/users', (req, res) => res.json(users));

// 2. CREATE
app.post('/api/users', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 3. UPDATE
app.put('/api/users/:id', (req, res) => {
  const targetId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === targetId);
  if (index !== -1) {
    users[index].name = req.body.name;
    res.json(users[index]);
  } else {
    res.status(404).send("User not found");
  }
});

// 4. DELETE
app.delete('/api/users/:id', (req, res) => {
  const targetId = parseInt(req.params.id);
  users = users.filter(u => u.id !== targetId);
  res.json({ message: "Deleted successfully" });
});