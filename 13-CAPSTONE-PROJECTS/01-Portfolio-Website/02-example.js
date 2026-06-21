/**
 * Capstone Project 1: Portfolio Website - Single File Code Demonstration
 * This file contains both the backend API server code and the frontend React components
 * to show how the entire full-stack application functions as a unified system.
 */

// ==========================================
// BACKEND CODE: Express API & MongoDB
// ==========================================
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // CORS configuration whitelisting the React port

// 1. Mongoose Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    match: [/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/, 'Please fill a valid email address'] 
  },
  message: { type: String, required: [true, 'Message is required'] },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// 2. Express Route handler to submit contact details
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message stored successfully!' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Server listener
const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));

// ==========================================
// FRONTEND CODE: React Components (Commented)
// ==========================================
/*
import React, { useState } from 'react';

// Contact Form component sending details via HTTP POST to the backend
export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setStatus('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err) {
      setStatus('Failed to connect to backend.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-900 text-white rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Contact Me</h3>
      <input 
        type="text" placeholder="Your Name" value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded" required
      />
      <input 
        type="email" placeholder="Your Email" value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded" required
      />
      <textarea 
        placeholder="Your Message" value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded h-32" required
      />
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded font-bold">
        Send Message
      </button>
      {status && <p className="mt-3 text-center text-sm text-gray-400">{status}</p>}
    </form>
  );
}
*/