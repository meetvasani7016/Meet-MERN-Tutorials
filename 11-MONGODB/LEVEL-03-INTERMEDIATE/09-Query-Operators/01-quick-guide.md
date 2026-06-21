# Query Operators

## 1. What is it?
Query operators perform logical matching comparisons (greater than, less than, arrays contains).

## 2. Why do we use it?
To run complex filtering logic (checking value ranges, logical conditions, or checking array items) directly on the database engine, returning only matching rows.

## 3. How does it work?
- **Analogy**: Adding filter rules to a search engine: 'find games where rating is above 4 ($gt), and genre is RPG ($in)'.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Filtering products by price limits, tags list matches, and dates ranges.

## 5. How do we build with it?
```js
db.items.find({ price: { $gt: 100 } });
```

- **Expected Output**: Returns all documents with prices greater than 100.
- **Best Practice / Rule**: Logical operator fields wrap around condition objects (e.g. { age: { $lt: 20 } }).
