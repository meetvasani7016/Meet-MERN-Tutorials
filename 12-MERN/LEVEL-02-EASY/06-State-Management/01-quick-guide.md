# Full-Stack State Management

## 1. What is it?
Synchronize client interface state modifications with database transactions.

## 2. Why do we use it?
React pages must refresh UI layouts dynamically when CRUD network requests finish, keeping local state and server database records synchronized.

## 3. How does it work?
- **Analogy**: Syncing your phone contacts. Adding a contact saves it locally (React state) and uploads it to the server (database query).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Reflecting additions, updates, or removals on client screens instantly.

## 5. How do we build with it?
```js
setItems(prev => prev.filter(item => item._id !== deletedId));
```

- **Expected Output**: Synchronizes user interfaces with database state updates.
- **Best Practice / Rule**: Perform optimistic UI updates only if you handle fetch rollback failures gracefully.
