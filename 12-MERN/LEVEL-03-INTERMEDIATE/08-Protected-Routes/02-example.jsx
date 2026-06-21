// --- client/components/ProtectedRoute.jsx ---
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  // If not authenticated, redirect to Login form
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// --- server/middleware/auth.js ---
// const jwt = require('jsonwebtoken');
// module.exports = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).send("Access Denied");
//   try {
//     req.user = jwt.verify(token, "SECRET");
//     next();
//   } catch(e) { res.status(400).send("Invalid Token"); }
// };