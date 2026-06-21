# Query Parameters

## 1. What is it?
Query parameters extract key-value pairs passed at the end of URLs after question marks.

## 2. Why do we use it?
To allow clients to filter, search, sort, or paginate data lists by appending optional key-value strings to the URL.

## 3. How does it work?
- **Analogy**: Adding sorting instructions to a request: '/items?sort=price&limit=10'. Sorting orders are read from query logs.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Searching products on web storefronts using paths like `/products?search=shoes&sort=price`.

## 5. How do we build with it?
```js
app.get('/search', (req, res) => { ... });
```

- **Expected Output**: Accesses query strings inside req.query.
- **Best Practice / Rule**: Query parameters are optional and do not match URL routes explicitly.
