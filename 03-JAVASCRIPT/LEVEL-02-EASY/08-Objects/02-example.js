// 1. Object Creation
let laptop = {
  brand: "Apple",
  processor: "M2",
  ramGB: 16,
  specifications: { gpu: "8-core", screen: "Liquid Retina" } // Nested Object
};

// 2. Accessing and Modifying properties
console.log("Laptop GPU:", laptop.specifications.gpu); // Dot notation
console.log("Laptop Brand:", laptop["brand"]); // Bracket notation

laptop.storage = "512GB"; // Add new key
laptop.ramGB = 24;        // Modify existing key
delete laptop.processor;  // Delete key

// 3. Methods & "this" keyword
let user = {
  username: "Jane",
  greet: function() {
    return "Hi, I am " + this.username; // "this" refers to the user object
  }
};
console.log(user.greet()); // "Hi, I am Jane"

// 4. Object Utilities
console.log("Keys:", Object.keys(laptop));     // ["brand", "ramGB", "specifications", "storage"]
console.log("Values:", Object.values(laptop)); // Array of values
