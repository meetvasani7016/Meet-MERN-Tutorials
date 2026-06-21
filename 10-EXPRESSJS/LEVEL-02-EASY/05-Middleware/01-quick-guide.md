# Express Middleware

## 1. What is it?
Middleware functions execute during requests, modifying request/response objects or running controls.

## 2. Why do we use it?
To execute common tasks (like logging, body parsing, CORS, or session validation) before the request reaches the final route handler, keeping route code DRY.

## 3. How does it work?
- **Analogy**: Security guards at a nightclub door. They inspect credentials, log entries, and either let you pass (next()) or reject you.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Checking if a user is logged in, parsing JSON bodies, and logging API hits.

## 5. How do we build with it?
```js
app.use((req, res, next) => { log(); next(); });
```

- **Expected Output**: Runs middleware routines before route processing.
- **Best Practice / Rule**: Always call next() inside custom middlewares, or the request will hang indefinitely!
