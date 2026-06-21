# MongoDB Sorting

## 1. What is it?
Sort queries order retrieved documents based on field criteria.

## 2. Why do we use it?
To return query outputs ordered logically (e.g. cheapest price first or newest date first) to match client display designs.

## 3. How does it work?
- **Analogy**: Sorting alphabetical cards index files: ordering users by age (youngest to oldest) or names (A to Z).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Sorting items, listings feeds, and highest-rated comments.

## 5. How do we build with it?
```js
db.users.find().sort({ name: 1 });
```

- **Expected Output**: Returns documents sorted alphabetically by name.
- **Best Practice / Rule**: Use value 1 for ascending order (A to Z, low to high) and -1 for descending order.
