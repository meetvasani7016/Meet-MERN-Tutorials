const fs = require('fs').promises;

async function loadConfigurations() {
  try {
    console.log("Start reading configs...");
    // Linear execution style for async filesystem operations
    const data = await fs.readFile('config.txt', 'utf-8');
    console.log("File loaded successfully:", data);
  } catch (error) {
    console.error("Async reading failed:", error.message);
  }
}

loadConfigurations();