# Databases: SQL vs NoSQL

## 1. What is it?
Databases store persistent applications data records in relational tables (SQL) or NoSQL document collections.

## 2. Why do we use it?
To select the correct storage model (strict relational SQL for transactions consistency vs flexible NoSQL document stores for rapid scale).

## 3. How does it work?
- **Analogy**: A spreadsheet ledger (SQL) vs a cabinet folder of index cards (NoSQL). SQL has columns constraints; NoSQL holds dynamic key objects.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Configuring database services for web applications.

## 5. How do we build with it?
```js
PostgreSQL tables with rigid columns vs MongoDB collections storing flexible NoSQL user documents.
```

- **Expected Output**: Enables secure data persistence for backend applications.
- **Best Practice / Rule**: Use SQL when you have highly relational, structured data. Use NoSQL for rapidly changing flexible document schemas.
