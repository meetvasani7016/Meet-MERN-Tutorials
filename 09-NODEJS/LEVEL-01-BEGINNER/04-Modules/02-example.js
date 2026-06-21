// --- 1. CommonJS (Default) ---
// utils.js
module.exports.add = (a, b) => a + b;

// app.js
const { add } = require('./utils');
console.log(add(5, 10)); // 15

// --- 2. ES Modules (Modern) ---
// utils.mjs
export const subtract = (a, b) => a - b;

// app.mjs
import { subtract } from './utils.mjs';
console.log(subtract(10, 5)); // 5