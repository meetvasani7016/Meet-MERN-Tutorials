const express = require('express');
const app = express();
app.use(express.json());

let todos = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Code backend", completed: true }
];

// 1. GET ALL
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// 2. CREATE
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 3. UPDATE
app.put('/api/todos/:id', (req, res) => {
  const idQuery = parseInt(req.params.id);
  const todo = todos.find(t => t.id === idQuery);
  
  if (todo) {
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    todo.text = req.body.text || todo.text;
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// 4. DELETE
app.delete('/api/todos/:id', (req, res) => {
  const idQuery = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== idQuery);
  res.json({ message: "Todo item removed successfully" });
});

app.listen(3000, () => console.log("Todo API online at http://localhost:3000/"));