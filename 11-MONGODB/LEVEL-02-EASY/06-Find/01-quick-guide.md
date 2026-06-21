# MongoDB Find

## 1. What is it?
Find queries search and retrieve documents matching filters inside a collection.

## 2. Why do we use it?
To fetch stored documents matching specific filter criteria.

## 3. How does it work?
- **Analogy**: A filing assistant searching drawers: 'bring me all student profiles where age is exactly 21'.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Displaying product feeds, searching profiles, and showing account items.

## 5. How do we build with it?
```js
db.users.find({ age: 21 });
```

- **Expected Output**: Returns a cursor list of all matching documents.
- **Best Practice / Rule**: Use findOne() to retrieve only the first matching document instead of a cursor list.
