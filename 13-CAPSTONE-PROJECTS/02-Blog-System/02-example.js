/**
 * Capstone Project 2: Blog System
 * Implements a Mongoose Post model with sub-document comments array
 * and Express CRUD routes to fetch and save articles.
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Post Schema with Embedded Comments
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  category: { type: String, default: 'General' },
  comments: [{
    author: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

// 2. Express Routes
// GET all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single post
app.get('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create post
app.post('/api/posts', async (req, res) => {
  try {
    const { title, body, category } = req.body;
    const newPost = new Post({ title, body, category });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// POST add comment
app.post('/api/posts/:id/comments', async (req, res) => {
  try {
    const { author, text } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    
    post.comments.push({ author, text });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// app.listen(5000);
