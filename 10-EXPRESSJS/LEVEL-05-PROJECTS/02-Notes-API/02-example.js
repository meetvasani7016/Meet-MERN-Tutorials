const express = require('express');
const app = express();
app.use(express.json());

let notes = [];

// Modular router simulation
const notesRouter = express.Router();

notesRouter.get('/', (req, res) => {
  const { search } = req.query;
  if (search) {
    const filtered = notes.filter(n => n.title.toLowerCase().includes(search.toLowerCase()));
    return res.json(filtered);
  }
  res.json(notes);
});

notesRouter.post('/', (req, res) => {
  const note = { id: Date.now(), title: req.body.title, content: req.body.content };
  notes.push(note);
  res.status(201).json(note);
});

app.use('/api/notes', notesRouter);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error("Dashboard error:", err.stack);
  res.status(500).json({ error: "Something failed inside notes server!" });
});

app.listen(3000, () => console.log("Notes API online at http://localhost:3000/"));