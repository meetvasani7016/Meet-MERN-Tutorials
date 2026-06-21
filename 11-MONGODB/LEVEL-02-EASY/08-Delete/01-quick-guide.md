# MongoDB Delete

## 1. What is it?
Delete operations remove documents from a collection.

## 2. Why do we use it?
To remove outdated, expired, or user-deleted documents from collections permanently.

## 3. How does it work?
- **Analogy**: Shredding files. You take files out of folders and delete them permanently from records.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Removing tasks, archiving messages, and canceling account profiles.

## 5. How do we build with it?
```js
db.users.deleteOne({ id: 101 });
```

- **Expected Output**: Removes matching document and returns count confirmation.
- **Best Practice / Rule**: Delete operations are permanent! Double check your filter parameters before deleting.
