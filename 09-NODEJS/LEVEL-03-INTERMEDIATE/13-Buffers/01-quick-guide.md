# NodeJS Buffers

## 1. What is it?
Buffers represent raw binary data sequences in memory outside the V8 heap.

## 2. Why do we use it?
Computers talk in binary (0s and 1s), but JavaScript was designed for text strings. Buffers provide raw binary memory allocations for handling files and networks.

## 3. How does it work?
- **Analogy**: A waiting room where binary data (zeros and ones) is gathered and stored temporarily before transferring to file disks.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Processing images, compressing zip archives, and encrypting network packets.

## 5. How do we build with it?
```js
const buf = Buffer.from('Hello');
```

- **Expected Output**: Allocates a memory block storing the binary code values of the characters.
- **Best Practice / Rule**: Node automatically handles buffer conversions when reading files or network payloads.
