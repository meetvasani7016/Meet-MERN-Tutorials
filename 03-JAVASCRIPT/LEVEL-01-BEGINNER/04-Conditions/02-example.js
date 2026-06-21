// 1. If / Else If / Else Structure
let balance = 15;
let itemCost = 20;

if (balance >= itemCost) {
  console.log("Purchase approved!");
} else if (balance > 0) {
  console.log("Insufficient funds, but balance is positive.");
} else {
  console.log("Account is empty or overdrawn.");
}

// 2. Truthy & Falsy Demo
let username = ""; // Empty string is falsy!
if (username) {
  console.log("Welcome back,", username);
} else {
  console.log("Please log in."); // This block will run
}

// 3. Switch Statement (Perfect for exact matches)
let userRole = "admin";
switch (userRole) {
  case "admin":
    console.log("Full systems access granted.");
    break; // break stops execution from leaking into the next case!
  case "editor":
    console.log("Can modify articles.");
    break;
  case "guest":
    console.log("Read-only access.");
    break;
  default:
    console.log("Unknown role registry.");
}
