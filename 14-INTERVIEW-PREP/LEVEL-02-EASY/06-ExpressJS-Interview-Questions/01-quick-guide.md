# ExpressJS Interview Questions

## 1. What is it?
Common junior interview questions focusing on routes, middleware structures, parameters, and controllers.

## 2. Why do we use it?
To verify route designing capacities, middleware filter patterns, CORS configurations, and global error handling strategies.

## 3. How does it work?
- **Analogy**: Flashcards for Express middleware filters, route endpoints, and CORS config.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
REST API developer and server architectures checkouts.

## 5. How do we build with it?
```json
What is middleware? -> A function that runs between the request entry and the final route response handler.
```

- **Expected Output**: Prepares you for backend API developer questions.
- **Best Practice / Rule**: Middleware order matters! express.json() must run before routes that parse body fields.
