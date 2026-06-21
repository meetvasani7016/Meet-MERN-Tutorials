# Express CRUD

## 1. What is it?
Implement complete Create, Read, Update, and Delete operations on in-memory collections.

## 2. Why do we use it?
Create, Read, Update, and Delete are the four foundational operations of any database-driven web application. Implementing them completes the core data cycle.

## 3. How does it work?
- **Analogy**: Managing an active shopping list: adding items, checking prices, modifying item quantities, and crossing off purchased lines.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Resource management in APIs, such as blogging sites and tasks tracker apps.

## 5. How do we build with it?
```js
DELETE route removes item indexes using array filter loops.
```

- **Expected Output**: Applies transactional modifications on memory lists.
- **Best Practice / Rule**: In-memory data resets every time the server restarts! Database integrations solve this.
