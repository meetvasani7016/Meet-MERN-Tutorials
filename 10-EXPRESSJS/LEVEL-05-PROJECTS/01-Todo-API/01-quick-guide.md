# Express Todo API Project

## 1. What is it?
Build a REST API using Express that supports complete CRUD operations for managing todo lists in memory.

## 2. Why do we use it?
Developers use Express Todo API Project to add structured logic, simplify code implementations, and resolve standard architecture requirements when building full-stack applications.

## 3. How does it work?
- **Analogy**: A digital checkboard: you can look at tasks (GET), post new chores (POST), edit status (PUT), and delete cards (DELETE).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Used across web applications, server scripts, and backend database integrations.

## 5. How do we build with it?
```javascript
app.get('/api/todos', (req, res) => res.json(todos));
```

- **Expected Output**: Spins up a REST API server.
- **Best Practice / Rule**: Using express.json() is required to read request body parameters.
