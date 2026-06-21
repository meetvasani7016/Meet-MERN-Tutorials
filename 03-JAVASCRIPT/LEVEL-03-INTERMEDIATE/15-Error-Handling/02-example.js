// 1. Try-Catch-Finally Flow
try {
  let user = "John";
  console.log("Name is:", user);
  
  // Let's trigger a ReferenceError by using an undefined variable
  let balance = salary; 
  console.log("Approved balance:", balance); // Skipped due to error above!
} catch (error) {
  // Catch block intercepts the error!
  console.error("Crash intercepted!");
  console.error("Error name:", error.name);       // "ReferenceError"
  console.error("Error message:", error.message); // "salary is not defined"
} finally {
  console.log("Maintenance check complete. This line always runs.");
}

// 2. Throwing Custom Errors
function purchaseItem(price) {
  if (price < 0) {
    throw new Error("Price cannot be negative!"); // Custom error constructor
  }
  return "Purchased successful for $" + price;
}

try {
  purchaseItem(-10); // Triggers custom error
} catch (e) {
  console.log("Rejected purchase:", e.message); // "Price cannot be negative!"
}
