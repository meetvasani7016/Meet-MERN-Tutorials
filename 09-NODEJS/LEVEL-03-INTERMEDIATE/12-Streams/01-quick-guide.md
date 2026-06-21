# NodeJS Streams

## 1. What is it?
Streams read and write data in small, continuous chunks instead of loading entire files into memory.

## 2. Why do we use it?
Loading a 2GB file entirely into RAM memory blocks the server's thread, crashing the service. Streams process data chunk-by-chunk, keeping memory usage minimal.

## 3. How does it work?
- **Analogy**: Watching a movie on Netflix (streaming buffer chunks) vs downloading the full 4GB video file onto your hard drive before playing it.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Serving video content (like YouTube), transferring large database exports, and uploading documents.

## 5. How do we build with it?
```js
fs.createReadStream('large.txt').pipe(res);
```

- **Expected Output**: Pipes chunks of a large file directly to the client response stream.
- **Best Practice / Rule**: Streams save massive amounts of RAM memory, making backends highly scalable for heavy file uploads/downloads.
