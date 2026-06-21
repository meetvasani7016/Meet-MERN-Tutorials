// Caching simulation logic
const database = { "user_1": "Alice Profile Details" };
const cache = {};
const cacheExpiryMs = 2000;

async function getUserData(userId) {
  const cached = cache[userId];
  if (cached && (Date.now() - cached.timestamp < cacheExpiryMs)) {
    console.log("Cache Hit!");
    return cached.data;
  }
  
  console.log("Cache Miss! Fetching from Database...");
  const data = database[userId];
  cache[userId] = { data, timestamp: Date.now() };
  return data;
}

async function runDemo() {
  await getUserData("user_1"); // Miss
  await getUserData("user_1"); // Hit
}
runDemo();