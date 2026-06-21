# Express REST API

## 1. What is it?
REST APIs represent standard web API architectures using uniform resources paths and HTTP verbs.

## 2. Why do we use it?
REST provides a standardized, stateless contract for client-server communication, allowing any client (web, mobile, smart TV) to interact with the backend API.

## 3. How does it work?
- **Analogy**: A standardized vending machine interface: buttons use standard codes (REST paths) to order, drop off, edit, or remove items.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Public API platforms (like Twitter, GitHub, Stripe APIs).

## 5. How do we build with it?
```js
GET /api/users, POST /api/users, DELETE /api/users/1
```

- **Expected Output**: Enables structured stateless API communications.
- **Best Practice / Rule**: Keep route paths plural (e.g. /api/products, not /api/getProduct).
