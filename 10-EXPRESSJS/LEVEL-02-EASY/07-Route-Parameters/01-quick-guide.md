# Route Parameters

## 1. What is it?
Route parameters capture dynamic values passed directly in URL paths.

## 2. Why do we use it?
To query specific individual database resources dynamically using variable segments inside the URL path.

## 3. How does it work?
- **Analogy**: An address envelope specifying room numbers: '/rooms/:number'. The system reads the label to open a specific door.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Fetching details of a single item at paths like `/api/products/:id`.

## 5. How do we build with it?
```js
app.get('/users/:id', (req, res) => { ... });
```

- **Expected Output**: Accesses URL variable values inside req.params.
- **Best Practice / Rule**: Route variables are always parsed as strings, convert to numbers before math calculations.
