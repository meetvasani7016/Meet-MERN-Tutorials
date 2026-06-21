// 1. Create buffer from string
const buf = Buffer.from('MERN Stack');
console.log("Raw Buffer bytes:", buf); // <Buffer 4d 45 52 4e 20 53 74 61 63 6b>

// 2. Convert buffer back to text
console.log("Buffer string:", buf.toString()); // "MERN Stack"

// 3. Allocate a fresh buffer block (10 bytes empty)
const allocBuf = Buffer.alloc(10);
allocBuf.write('Hi');
console.log("Allocated buffer details:", allocBuf.toString());