# NodeJS Introduction

## 1. What is it?
Node.js is an asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.

## 2. Why do we use it?
JavaScript was originally built to run only inside browsers. Node.js was created to allow developers to build backend systems, automation scripts, and server applications using the same language, maximizing code reuse and developer productivity.

## 3. How does it work?
- **Analogy**: JavaScript escaped the browser cage! Instead of just controlling buttons on a webpage, JS can now run on your operating system directly, opening files, managing system memory, and running servers.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Used in real-world systems like Netflix, LinkedIn, and Uber to handle high-concurrency API requests.

## 5. How do we build with it?
```sh
console.log('Hello from local Node environment!');
```

- **Expected Output**: Prints the log output directly into your computer terminal, not the browser developer tools.
- **Best Practice / Rule**: Node.js runs single-threaded but uses asynchronous event loops to handle thousands of concurrent requests.
