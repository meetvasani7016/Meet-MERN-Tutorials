# Express Authentication Basics

## 1. What is it?
Express Authentication Basics involves building security mechanisms to verify the identity of a client request using stateful (Sessions & Cookies) or stateless (JSON Web Tokens) approaches, combined with secure cryptographic hashing (bcrypt) to protect user credentials.

## 2. Why do we use it?
Web servers are stateless by default—every HTTP request is treated as brand new. Authentication allows the server to remember who you are across requests so you can access dashboard panels, submit forms, or manage your user profile securely without re-entering your password on every page click.

## 3. How does it work?
We compare client identity using one of two primary strategies:
1. **Session-based Authentication**: The server creates a unique session record in memory or a database (e.g., Redis) and sends a unique session ID in a browser Cookie. The browser sends this Cookie automatically on subsequent requests.
2. **Token-based Authentication (JWT)**: The server signs an encrypted JSON payload containing user details (like ID) using a secret signature key. The token is sent to the client, who attaches it in the HTTP `Authorization` header (`Bearer <token>`) or an HTTP-Only Cookie.
3. **Password Security**: Plain-text passwords are never stored. The `bcrypt` hashing function applies a "salt" (random characters) and runs a work-factor algorithm to produce a secure, irreversible 60-character string (hash) that is compared during login.

## 4. Where is it used?
- **Sessions & Cookies**: Traditional server-rendered apps (like MVC apps with EJS/Pug) where the browser and server are on the same domain.
- **JWT & bearer tokens**: Modern full-stack decoupled systems (like MERN apps with separate React and Express hosts) and mobile app backend services.

## 5. How do we build with it?

### Comparative Summary
| Technology | What it is | When to use | Why we use it |
| :--- | :--- | :--- | :--- |
| **bcrypt** | Irreversible password hashing library | Registration & Logins | Prevents raw password exposure in databases if breaches occur. |
| **Cookies** | Tiny browser key-value text files | Client-side tracking / token store | Automatically sent by browsers, highly secure if `HttpOnly` and `Secure` are enabled. |
| **Sessions** | Stateful server-side session stores | Same-domain legacy architectures | Simple management, session revocation on the server side is instant. |
| **JWT** | Stateless self-contained identity tokens | Modern decoupled SPA APIs | No database lookup needed on every request, highly scalable. |

```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = []; // Mock database
const JWT_SECRET = "my_super_secret_signing_key";

// 1. Password Hashing (bcrypt)
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); // Salt factor 10
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "Registered successfully!" });
});

// 2. JWT Generation & Verification
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).send("User not found");

  const isMatch = await bcrypt.compare(password, user.password); // Verify password
  if (!isMatch) return res.status(401).send("Incorrect password");

  // Sign Token
  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});
```

- **Expected Output**: Logs returns successful status. Login returns JSON payload containing the signed `token` string.
- **Best Practice**: Always set `HttpOnly: true` and `Secure: true` flags when sending tokens in cookies to block scripts attacks.
