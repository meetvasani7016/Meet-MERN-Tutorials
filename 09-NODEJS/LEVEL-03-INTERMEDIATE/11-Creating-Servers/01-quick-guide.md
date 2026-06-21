# Creating HTTP Servers

## 1. What is it?
Use the built-in http module to create web servers that listen for requests and send responses.

## 2. Why do we use it?
To understand the low-level mechanics of the HTTP protocol, how requests are received, and how raw response streams are returned to clients.

## 3. How does it work?
- **Analogy**: An office receptionist sitting at a desk (listening port). When clients approach (request), she hands them files (response).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Building lightweight web hooks, microservices, or custom load balancers.

## 5. How do we build with it?
```js
http.createServer((req, res) => res.end('Hi')).listen(3000);
```

- **Expected Output**: Spins up a local server listening for connections at http://localhost:3000/.
- **Best Practice / Rule**: You must close the response stream using res.end() or the browser page will spin infinitely waiting for data.
