// 1. Array Creation & Modification
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango");   // Appends to the end: ["Apple", "Banana", "Cherry", "Mango"]
fruits.unshift("Kiwi"); // Inserts at the start: ["Kiwi", "Apple", "Banana", "Cherry", "Mango"]

let removedEnd = fruits.pop();     // Removes Mango
let removedStart = fruits.shift(); // Removes Kiwi
console.log("Cleaned List:", fruits); // ["Apple", "Banana", "Cherry"]

// 2. Splice (Modify array at index: splice(start, deleteCount, itemsToAdd))
fruits.splice(1, 1, "Orange", "Peach"); 
console.log("After Splice:", fruits); // ["Apple", "Orange", "Peach", "Cherry"] (Banana replaced)

// 3. Search methods
console.log("Contains Peach?", fruits.includes("Peach")); // true
console.log("Index of Orange:", fruits.indexOf("Orange")); // 1

// 4. Higher-Order Array Iteration
let prices = [10, 20, 30, 40];

// Map - Creates a new array by transforming every item
let discountedPrices = prices.map(price => price * 0.9);
console.log("Discounted:", discountedPrices); // [9, 18, 27, 36]

// Filter - Creates a new array with items matching a condition
let highPrices = prices.filter(price => price > 25);
console.log("High prices:", highPrices); // [30, 40]
