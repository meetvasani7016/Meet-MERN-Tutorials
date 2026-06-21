// 1. Creating a Promise (resolve & reject handlers)
const fetchProductData = new Promise((resolve, reject) => {
  let successStatus = true; // Simulating outcome of network task
  
  if (successStatus) {
    resolve({ id: 101, name: "Tablet" }); // Send data as success payload
  } else {
    reject("Failed to connect to API database."); // Send error payload
  }
});

// 2. Consuming the Promise (.then, .catch, .finally)
fetchProductData
  .then((data) => {
    console.log("Success! Loaded product:", data.name);
  })
  .catch((errorMsg) => {
    console.error("Error caught:", errorMsg);
  })
  .finally(() => {
    console.log("Connection closed. (Always runs)");
  });

// 3. Running Promises in Parallel (Promise.all)
const p1 = new Promise(resolve => setTimeout(() => resolve("First API loaded"), 100));
const p2 = new Promise(resolve => setTimeout(() => resolve("Second API loaded"), 200));

Promise.all([p1, p2])
  .then((results) => {
    console.log("All Promises completed:", results); // ["First API loaded", "Second API loaded"]
  });
