# Client-Server Architecture

## 1. What is it?
Client-Server is a distributed structure partition where clients request resources and servers process and respond.

## 2. Why do we use it?
To decouple user interface views from server calculations and persistent databases, allowing cross-platform clients (web, mobile) to query a single backend.

## 3. How does it work?
- **Analogy**: Restaurant setup. The Client is the customer ordering food (requests). The Server is the kitchen staff preparing meals (response).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Standard frontend-backend web integrations.

## 5. How do we build with it?
```js
React app running on a laptop calling Express API server endpoints.
```

- **Expected Output**: Enables decoupled full-stack application development.
- **Best Practice / Rule**: Clients handle visual layouts; servers handle business calculations and database gates.
