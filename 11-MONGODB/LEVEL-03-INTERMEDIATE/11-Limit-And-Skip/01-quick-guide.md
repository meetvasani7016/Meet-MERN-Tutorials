# Limit & Skip

## 1. What is it?
Limit and Skip queries restrict result counts to build search pagination lists.

## 2. Why do we use it?
Loading 10,000 documents at once slows network speeds. Limit and Skip allow pagination, loading small page chunks dynamically.

## 3. How does it work?
- **Analogy**: Flipping pages in an online catalog. Skip loads page numbers, and Limit controls item counts per page.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Building search pages ('Page 1', 'Page 2') on listings sites.

## 5. How do we build with it?
```js
db.users.find().skip(10).limit(5);
```

- **Expected Output**: Skips the first 10 records and returns the next 5 documents.
- **Best Practice / Rule**: Always sort your queries before using skip and limit to ensure consistent page layouts.
