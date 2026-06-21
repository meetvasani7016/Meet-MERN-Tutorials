// MongoDB & Mongoose Cheat Sheet
// --- 1. MongoDB shell queries ---
// Find users where age >= 21 sorted by name ascending
db.users.find({ age: { $gte: 21 } }).sort({ name: 1 });

// Update Bob's status to Active
db.users.updateOne({ name: "Bob" }, { $set: { status: "Active" } });

// --- 2. Mongoose Schema Setup ---
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 }
});
const User = mongoose.model('User', userSchema);