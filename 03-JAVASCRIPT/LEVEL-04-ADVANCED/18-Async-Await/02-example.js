// 1. Asynchronous Delay Utility (Returns a Promise)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 2. Async Function using Await & Try/Catch
async function runSystemDiagnostics() {
  try {
    console.log("Diagnostic start...");
    await delay(1000); // Pauses code for 1 second!
    
    console.log("Server verification ongoing...");
    await delay(1000); // Pauses code for another 1 second!
    
    let resultStatus = "Healthy";
    console.log("Status check:", resultStatus);
    
  } catch (error) {
    // try/catch replaces .catch() chains!
    console.log("Diagnostic failed:", error.message);
  }
}

runSystemDiagnostics();

// 3. Sequential vs Parallel fetching
const fetchItems = () => delay(500).then(() => "Items");
const fetchPrices = () => delay(500).then(() => "Prices");

async function runParallelFetches() {
  console.log("Fetching concurrently...");
  // Promise.all runs both fetches simultaneously (takes 500ms total, not 1000ms!)
  const [items, prices] = await Promise.all([fetchItems(), fetchPrices()]);
  console.log("Fetched payloads:", items, prices);
}
runParallelFetches();
