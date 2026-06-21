# Visual Guide: MERN Authentication Flow Lifecycle

The following diagram maps the lifecycle of the MERN Authentication Flow from user input to accessing protected resources:

```text
User              React Frontend           Express API Server         MongoDB Database
 |                      |                          |                          |
 |--- 1. Input Login ---|                          |                          |
 |--- 2. Form Submit ---|                          |                          |
 |                      |--- 3. POST /api/login -->|                          |
 |                      |                           |--- 4. findOne(email) -->|
 |                      |                           |<-- 5. Return Hashed Pwd-|
 |                      |                           |-- 6. bcrypt.compare()   |
 |                      |                           |-- 7. jwt.sign()         |
 |                      |<-- 8. Return Token -------|                          |
 |                      |    (or set Cookie)       |                          |
 |                      |-- 9. Save in LocalStorage|                          |
 |                      |                          |                          |
 |                      |--- 10. GET /dashboard -->|                          |
 |                      |    (Bearer JWT Token)    |-- 11. Verify Token       |
 |                      |                          |-- 12. Retrieve Tasks --->|
 |                      |<-- 13. Render Dashboard -|<-- 14. Return Tasks -----|
 v                      v                          v                          v
```
