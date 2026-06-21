/**
 * Capstone Project 5: Ecommerce Store
 * Restful catalog backend supporting search queries, category filters,
 * and cart quantity updates checkout simulations.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: String,
  stock: { type: Number, default: 10 }
});

const Product = mongoose.model('Product', productSchema);

// 2. Routes
// Fetch products with search and category filter queries
app.get('/api/products', async (req, res) => {
  try {
    const { search, category } = req.query;
    const query = {};
    
    if (search) {
      query.name = { $regex: search, $options: 'i' }; // Case-insensitive search
    }
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST mock checkout handler (educational only)
app.post('/api/checkout', async (req, res) => {
  try {
    const { cart } = req.body; // Array of { productId, quantity }
    if (!cart || cart.length === 0) return res.status(400).json({ error: "Cart is empty" });
    
    let total = 0;
    // Iterate through items, verify stock and sum pricing
    for (const item of cart) {
      const product = await Product.findById(item._id);
      if (!product) return res.status(404).json({ error: `Product ${item._id} not found` });
      if (product.stock < item.quantity) {
        return res.status(400).json({ error: `Insufficient stock for ${product.name}` });
      }
      
      // Deduct stock
      product.stock -= item.quantity;
      await product.save();
      
      total += product.price * item.quantity;
    }
    
    res.json({ success: true, message: "Order processed successfully!", total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// app.listen(5000);
