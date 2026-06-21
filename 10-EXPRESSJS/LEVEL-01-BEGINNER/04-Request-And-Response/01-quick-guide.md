# Request & Response

## 1. What is it?
Access client inputs inside requests and transmit server response payloads.

## 2. Why do we use it?
To interact with the client. The server reads request headers, query filters, and JSON bodies, then returns response payloads with status codes.

## 3. How does it work?
- **Analogy**: An order form. The client fills out item choices (request details), and the server delivers the food plate (response).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Accepting form payloads, handling login inputs, and sending JSON back.

## 5. How do we build with it?
```js
app.get('/data', (req, res) => res.json(req.headers));
```

- **Expected Output**: Accesses client details and outputs JSON variables.
- **Best Practice / Rule**: Always call res.json() or res.send() to end request-response loops.
