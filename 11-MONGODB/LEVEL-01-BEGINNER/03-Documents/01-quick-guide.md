# MongoDB Documents

## 1. What is it?
Documents are BSON data records that store key-value properties in MongoDB collections.

## 2. Why do we use it?
Storing data as documents (JSON/BSON) allows developers to map nested complex data structures (like arrays of tags or embedded profiles) directly inside a single record.

## 3. How does it work?
- **Analogy**: A profile page in a file cabinet directory. It lists fields (Name, Date, Hobbies), using nested structures.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Saving user account data, post logs, and config sheets.

## 5. How do we build with it?
```js
const doc = { "_id": ObjectId(), "name": "Bob" };
```

- **Expected Output**: Creates a structured database document layout.
- **Best Practice / Rule**: Every document requires a unique _id field which acts as the primary key locator.
