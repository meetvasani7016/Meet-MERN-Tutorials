# NodeJS Simple Web Server Project

## 1. What is it?
Create a native HTTP server serving static HTML pages and API JSON payloads.

## 2. Why do we use it?
Developers use NodeJS Simple Web Server Project to add structured logic, simplify code implementations, and resolve standard architecture requirements when building full-stack applications.

## 3. How does it work?
- **Analogy**: A local librarian responding to queries: if you ask for a book (HTML path), she fetches the page; if you ask for status (API), she reads the log list.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Used across web applications, server scripts, and backend database integrations.

## 5. How do we build with it?
```javascript
http.createServer((req, res) => { ... }).listen(8000);
```

- **Expected Output**: Renders an HTTP web server locally.
- **Best Practice / Rule**: Always set appropriate Content-Type headers so browsers know how to render responses.
