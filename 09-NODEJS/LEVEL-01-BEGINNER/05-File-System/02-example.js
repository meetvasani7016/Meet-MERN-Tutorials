const fs = require('fs');

// 1. Synchronous Write & Read (Blocks thread)
fs.writeFileSync('test.txt', 'Hello Node.js Sync!');
const dataSync = fs.readFileSync('test.txt', 'utf-8');
console.log("Sync read:", dataSync);

// 2. Asynchronous Write & Read (Non-blocking with callbacks)
fs.writeFile('test_async.txt', 'Hello Node.js Async!', (err) => {
  if (err) throw err;
  fs.readFile('test_async.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log("Async read:", data);
  });
});