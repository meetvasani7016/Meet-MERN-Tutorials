# MongoDB Indexes

## 1. What is it?
Indexes optimize lookup query speeds by storing sorted maps of target fields.

## 2. Why do we use it?
Without indexes, MongoDB performs a Collection Scan (scanning every single document in the database, extremely slow). Indexes keep a pre-sorted lookup key tree.

## 3. How does it work?
- **Analogy**: The index section at the back of a textbook. Instead of reading all 500 pages (collection scan), you lookup keywords to find pages instantly.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Enforcing unique emails, speeding up username and product search lookups.

## 5. How do we build with it?
```js
db.users.createIndex({ email: 1 });
```

- **Expected Output**: Creates a lookup index tree on the email field.
- **Best Practice / Rule**: Indexes speed up read queries, but slow down write/insert operations because the index tree must update on every write.
