# NodeJS File System

## 1. What is it?
The fs module provides APIs for interacting with the computer's file system (read, write, append, delete).

## 2. Why do we use it?
Web applications must read configuration files, save user logs, upload avatars, and create temporary directories on the server's hard drive.

## 3. How does it work?
- **Analogy**: A digital office assistant. You command it: 'read this text file' or 'create a new folder and write these logs'.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Log tracking systems, user image upload routers, and local database file storage.

## 5. How do we build with it?
```js
fs.writeFileSync('log.txt', 'data');
```

- **Expected Output**: Creates a file named log.txt containing the text 'data'.
- **Best Practice / Rule**: Synchronous functions (e.g. readFileSync) block execution until complete. Asynchronous functions use callbacks/promises to prevent blocking.
