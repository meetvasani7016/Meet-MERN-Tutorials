# MERN CRUD Workflow

## 1. What is it?
Follow a complete data cycle: React action triggers Express routes, modifying MongoDB documents.

## 2. Why do we use it?
Understanding the complete full-stack cycle (from user interactions in React to API calls in Express, database updates in Mongo, and client view refreshes) completes full-stack capability.

## 3. How does it work?
- **Analogy**: Submitting a bank slip. You input details in React, send it to the Express clerk, who saves it in the MongoDB vault.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Building any interactive stateful dashboard or list app.

## 5. How do we build with it?
```js
React fetch(POST) ===> Express app.post ===> Mongoose save() ===> MongoDB
```

- **Expected Output**: Persists client inputs into active database collections.
- **Best Practice / Rule**: Always refresh your React component state after database modifications to update the UI on screen.
