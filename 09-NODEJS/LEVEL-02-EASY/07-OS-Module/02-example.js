const os = require('os');

// 1. Check OS platform & CPU architecture
console.log("Platform:", os.platform()); // "win32", "darwin", "linux"
console.log("CPU Architecture:", os.arch()); // "x64", "arm64"

// 2. RAM Memory status checks
const totalMemoryGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
const freeMemoryGB = (os.freemem() / (1024 ** 3)).toFixed(2);
console.log(`Memory Status: ${freeMemoryGB} GB free out of ${totalMemoryGB} GB total`);

// 3. CPU Core count
console.log("CPU Cores:", os.cpus().length);