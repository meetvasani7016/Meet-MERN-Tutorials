const fs = require('fs');

// 1. Create a readable stream from a file source
const reader = fs.createReadStream('large-file.txt', { encoding: 'utf-8', highWaterMark: 16384 }); // 16KB chunks

// 2. Create a writable stream to a destination copy
const writer = fs.createWriteStream('copy-file.txt');

// 3. Pipe the readable stream directly to the writable target
reader.pipe(writer);

writer.on('finish', () => {
  console.log("Piping complete! File copied in stream chunks.");
});