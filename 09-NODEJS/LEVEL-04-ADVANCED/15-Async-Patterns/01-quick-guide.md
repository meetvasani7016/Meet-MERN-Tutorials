# Async Patterns in Node

## 1. What is it?
Explore callback, promise, and async/await flows inside Node environments.

## 2. Why do we use it?
Synchronous blocking operations stall the server process, preventing other users from loading pages. Async patterns ensure the single thread remains free to handle requests.

## 3. How does it work?
- **Analogy**: Choosing a mail delivery speed: callbacks (waiting for return post), promises (getting tracking receipts), and async/await (blocking reading lists until letters arrive).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Database queries, third-party API fetch calls, and file I/O operations.

## 5. How do we build with it?
```js
const data = await fs.promises.readFile('file.txt');
```

- **Expected Output**: Halts script step execution cleanly until asynchronous file operations complete.
- **Best Practice / Rule**: Async/await is syntactic sugar over promises. Use try/catch blocks to intercept exceptions.
