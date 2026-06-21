# Error Handling

## 1. What is it?
Implement catch-all middleware to handle backend server errors gracefully without crashes.

## 2. Why do we use it?
When something crashes (like an invalid database call), uncaught errors crash the Node server process. Error middleware catches crashes safely, logging errors and returning standard error JSON.

## 3. How does it work?
- **Analogy**: Installing emergency fire escapes in a hotel. If a kitchen fire breaks out (crashes), guest flows exit safely (sends error messages) rather than collapsing the hotel structures.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Safeguarding production APIs from crashes during invalid inputs or server failure.

## 5. How do we build with it?
```js
app.use((err, req, res, next) => { res.status(500).send(); });
```

- **Expected Output**: Catches exceptions and sends error status reports.
- **Best Practice / Rule**: Error handling middleware must accept exactly four arguments: (err, req, res, next).
