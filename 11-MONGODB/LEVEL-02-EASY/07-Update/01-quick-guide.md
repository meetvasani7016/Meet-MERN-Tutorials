# MongoDB Update

## 1. What is it?
Update operations modify fields inside existing documents.

## 2. Why do we use it?
To modify parts of existing documents without rewriting the entire record, using atomic database operations.

## 3. How does it work?
- **Analogy**: Taking a file page out of a drawer, erasing the old phone number, and writing the new line.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Changing passwords, incrementing post view counters, and editing descriptions.

## 5. How do we build with it?
```js
db.users.updateOne({ name: 'Bob' }, { $set: { age: 23 } });
```

- **Expected Output**: Modifies Bob's age to 23 and prints status updates metadata.
- **Best Practice / Rule**: Always use update operators like $set, or you will replace the ENTIRE document structure with your inputs!
