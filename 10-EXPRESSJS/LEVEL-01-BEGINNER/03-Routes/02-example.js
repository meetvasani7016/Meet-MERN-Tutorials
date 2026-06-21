const express = require('express');
const app = express();

app.get('/items', (req, res) => {
  res.status(200).send("Fetch all items");
});

app.post('/items', (req, res) => {
  res.status(201).send("Create new item");
});

app.delete('/items', (req, res) => {
  res.status(200).send("Delete item record");
});