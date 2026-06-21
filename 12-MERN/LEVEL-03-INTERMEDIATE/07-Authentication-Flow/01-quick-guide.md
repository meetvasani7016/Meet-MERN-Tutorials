# MERN Authentication Flow

## 1. What is it?
MERN Authentication Flow is the complete full-stack integration of secure user authentication, connecting a React login frontend, an Express API router, a MongoDB database, password verification via bcrypt, and stateless token storage.

## 2. Why do we use it?
It is the standard security layer for MERN stack applications. It protects user resources, enables customizable personal profiles, and ensures that the API server only processes data operations for authorized users who possess valid tokens.

## 3. How does it work?
The full authentication pipeline follows these phases:
1. **User Input**: A visitor fills in their login details in a React web form.
2. **React Form Submit**: The frontend prevents default form reloading, serializes the data to JSON, and sends an HTTP POST request to the backend `/api/login` endpoint.
3. **Express API**: The router captures the request, retrieves the password from the body, and checks MongoDB for a matching user record.
4. **Password Verification**: The server uses `bcrypt.compare()` to compare the user's password input with the hashed password stored in the database.
5. **JWT Creation**: On match, the server generates a JSON Web Token (JWT) signed with a secure server-side secret key.
6. **Browser Storage / Cookie**: The token is sent to the client, either stored in localStorage (React state) or written to an HTTP-Only secure Cookie.
7. **Protected Route Access**: Subsequent requests attach this token. Express middleware validates the token, whitelists access, and React router unlocks dashboard pages.

## 4. Where is it used?
- E-commerce checkout workflows, user dashboards, and settings pages in full-stack web applications.

## 5. How do we build with it?

```javascript
// --- server/routes/auth.js (Express Route) ---
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User does not exist" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
  // Set in secure HTTP-Only Cookie
  res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
  res.json({ success: true, user: { name: user.name, email: user.email } });
});
```

- **Expected Output**: Client receives cookie and user JSON object. Unlocks protected dashboard pages.
- **Best Practice**: Use a React Context Provider to wrap user authentication states and redirect unauthenticated routes.
