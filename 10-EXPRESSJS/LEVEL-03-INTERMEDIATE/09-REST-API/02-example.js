const express = require('express');
const app = express();
app.use(express.json());

// RESTful routing patterns
app.get('/api/tasks', (req, res) => { /* Read */ });
app.post('/api/tasks', (req, res) => { /* Create */ });
app.put('/api/tasks/:id', (req, res) => { /* Update */ });
app.delete('/api/tasks/:id', (req, res) => { /* Delete */ });