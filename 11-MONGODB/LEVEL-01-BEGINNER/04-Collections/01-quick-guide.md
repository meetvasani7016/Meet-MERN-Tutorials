# MongoDB Collections

## 1. What is it?
Collections group related MongoDB documents together, acting as tables.

## 2. Why do we use it?
To organize documents logically. Instead of mixing users, logs, and billing records, collections partition documents into separate sets.

## 3. How does it work?
- **Analogy**: Filing cabinet drawers. You keep customer profiles in one drawer (users collection) and invoices in another (orders collection).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Dividing database tables into users, products, and invoice collections.

## 5. How do we build with it?
```sh
db.createCollection('users');
```

- **Expected Output**: Allocates a new collection inside your active database directory.
- **Best Practice / Rule**: Collections do not enforce schemas by default. You can store documents with different structures side-by-side.
