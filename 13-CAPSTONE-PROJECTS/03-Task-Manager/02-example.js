/**
 * Capstone Project 3: Task Manager
 * Complete MERN back-end router supporting priority levels, status tags,
 * and user associations.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Task Schema definition
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['Pending', 'In-Progress', 'Completed'], default: 'Pending' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  ownerId: { type: String, required: true }, // Links tasks to user account ID
  createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);

// 2. CRUD Endpoints
// GET tasks by user
app.get('/api/tasks', async (req, res) => {
  try {
    const { ownerId } = req.query; // query tasks?ownerId=123
    const tasks = await Task.find({ ownerId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create task
app.post('/api/tasks', async (req, res) => {
  try {
    const { title, description, priority, ownerId } = req.body;
    const newTask = new Task({ title, description, priority, ownerId });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update task details/status
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// app.listen(5000);
