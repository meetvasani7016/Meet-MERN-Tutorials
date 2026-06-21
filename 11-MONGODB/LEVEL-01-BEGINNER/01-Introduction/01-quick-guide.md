# MongoDB Introduction

## 1. What is it?
MongoDB is a document-based NoSQL database that stores data in flexible, JSON-like documents.

## 2. Why do we use it?
Relational databases (SQL) enforce strict tabular structures, making schema changes complex and slow. MongoDB stores JSON-like documents, matching how javascript handles objects.

## 3. How does it work?
- **Analogy**: Excel sheets vs text folders. Instead of tables with strict rows and columns (SQL), you store information inside folders containing flexible document forms (JSON) that can have different details for each page.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Handling big data, real-time analytics, and rapidly changing web apps.

## 5. How do we build with it?
```js
{ "name": "Alice", "role": "Lead" }
```

- **Expected Output**: Represents a single database document schema.
- **Best Practice / Rule**: NoSQL databases allow you to save nested arrays and objects inside documents directly, avoiding complex table joins.
