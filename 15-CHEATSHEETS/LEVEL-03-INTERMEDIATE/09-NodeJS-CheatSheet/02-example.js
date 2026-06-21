// Node.js Core Modules Cheat Sheet
const path = require('path');
const fs = require('fs');

// 1. Path Join (OS-safe)
const filePath = path.join(__dirname, 'data', 'log.txt');

// 2. Read File (Async Promises)
fs.promises.readFile(filePath, 'utf-8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// 3. Write File (Sync)
fs.writeFileSync(filePath, 'log entry data');