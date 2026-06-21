# Express Routes

## 1. What is it?
Routes define how endpoints respond to client requests (methods and URL paths).

## 2. Why do we use it?
To handle different types of user requests (like viewing a page vs deleting a post) by mapping HTTP verbs (GET, POST, PUT, DELETE) to specific functions.

## 3. How does it work?
- **Analogy**: Mailboxes labeled for specific operations: one slot for sending letters (POST), another for viewing invoices (GET).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Directing requests like creating blogs or updating user profiles.

## 5. How do we build with it?
```js
app.post('/submit', (req, res) => { ... });
```

- **Expected Output**: Enables HTTP endpoint listening scopes.
- **Best Practice / Rule**: Use correct HTTP methods: GET to read, POST to create, PUT to update, DELETE to remove.
