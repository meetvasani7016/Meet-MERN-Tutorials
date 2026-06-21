# Request-Response Lifecycle

## 1. What is it?
The Request-Response lifecycle is the protocol loop where a client query triggers server routing actions returning headers and content.

## 2. Why do we use it?
To standardize how browsers request files/data (via HTTP requests containing headers and bodies) and how servers return status payloads (like index.html or JSON).

## 3. How does it work?
- **Analogy**: Mailing a letter. You write addresses (URL) and seal data (headers/body), postman transfers it (network), receiver reads it and writes replies (response).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
API routings, fetch pipelines, and network requests.

## 5. How do we build with it?
```js
Entering a URL path, browser sending HTTP GET, server resolving route and returning index.html.
```

- **Expected Output**: Synchronizes user interfaces with server data structures.
- **Best Practice / Rule**: Every request must trigger a response status code, or the browser will spin waiting forever.
