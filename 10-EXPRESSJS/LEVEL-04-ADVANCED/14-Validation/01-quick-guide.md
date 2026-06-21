# Request Validation

## 1. What is it?
Sanitize and validate client request payloads before database insertion.

## 2. Why do we use it?
Clients can submit incomplete, empty, or malicious payloads. Validation sanitizes request data *before* it reaches controllers or database schemas, ensuring data integrity.

## 3. How does it work?
- **Analogy**: A border customs checkpoint. If you bring illegal items (bad payloads) or are missing visas (missing fields), you are turned back before entry.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Form submit checks, email formats checks, and preventing SQL/NoSQL injections.

## 5. How do we build with it?
```js
if (!req.body.email.includes('@')) return error();
```

- **Expected Output**: Rejects incorrect request formats with bad-request logs.
- **Best Practice / Rule**: Validation avoids empty entries and SQL/NoSQL injection payloads in databases.
