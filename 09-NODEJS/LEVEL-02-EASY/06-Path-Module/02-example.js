const path = require('path');

// 1. Join path segments safely matching host OS
const fullPath = path.join('workspace', 'project', 'server.js');
console.log("Joined Path:", fullPath);

// 2. Extract file information
console.log("Filename:", path.basename(fullPath)); // "server.js"
console.log("Extension:", path.extname(fullPath)); // ".js"

// 3. Resolve absolute path
console.log("Absolute path:", path.resolve(fullPath));