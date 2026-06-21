/**
 * Capstone Project 4: Expense Tracker
 * Features Mongoose financial schemas and MongoDB aggregation pipelines
 * to compute categories balances and summary metrics.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Schema
const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true }, // Positive for incomes, negative for costs
  category: { type: String, enum: ['Food', 'Utilities', 'Salary', 'Entertainment', 'Other'], required: true },
  date: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', expenseSchema);

// 2. API Routes
app.get('/api/expenses', async (req, res) => {
  try {
    const items = await Expense.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/expenses', async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    const newItem = new Expense({ description, amount, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Aggregation Pipeline Route for statistics
app.get('/api/expenses/stats', async (req, res) => {
  try {
    const stats = await Expense.aggregate([
      {
        $group: {
          _id: "$category",
          totalAmount: { $sum: "$amount" },
          averageAmount: { $avg: "$amount" },
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// app.listen(5000);
