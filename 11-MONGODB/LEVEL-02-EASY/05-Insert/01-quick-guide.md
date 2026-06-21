# MongoDB Insert

## 1. What is it?
Insert operations save new documents into a database collection.

## 2. Why do we use it?
To save new data records into database collections permanently.

## 3. How does it work?
- **Analogy**: Adding a new page profile inside a client file cabinet drawer.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Adding new users, publishing blog articles, and logging purchase transactions.

## 5. How do we build with it?
```js
db.users.insertOne({ name: 'Bob' });
```

- **Expected Output**: Saves the document and returns the unique _id code.
- **Best Practice / Rule**: Use insertOne for single records, and insertMany for array lists.
