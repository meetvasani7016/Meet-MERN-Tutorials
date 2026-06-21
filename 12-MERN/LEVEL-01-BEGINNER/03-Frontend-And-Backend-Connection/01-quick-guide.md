# CORS and API Connections

## 1. What is it?
Configure Cross-Origin Resource Sharing (CORS) to connect React to Express across different ports.

## 2. Why do we use it?
Browsers enforce Same-Origin Security rules, blocking React from fetching Express APIs hosted on different ports. CORS middleware whitelists communication paths.

## 3. How does it work?
- **Analogy**: An ID card checking desk. By default, servers block requests from other ports unless you register their credentials.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Connecting React development services to local or public Express endpoints.

## 5. How do we build with it?
```js
app.use(cors({ origin: 'http://localhost:5173' }));
```

- **Expected Output**: Enables React (running on 5173) to fetch data from Express (running on 5000).
- **Best Practice / Rule**: Without CORS enabled on the backend, browsers will block all incoming fetch requests from your React client.
