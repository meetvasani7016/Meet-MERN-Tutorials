// 1. Primitive Types
let name = "Meet";       // String
let rating = 4.8;        // Number (handles integers and decimals)
let isAwesome = true;    // Boolean
let emptyValue = null;   // Null (intentional absence of value)
let notDefined;          // Undefined (declared but not assigned value)

console.log("Types:", typeof name, typeof rating, typeof isAwesome, typeof emptyValue, typeof notDefined);
// Note: typeof null returns "object" due to a historic bug in JS!

// 2. Reference Types (Objects & Arrays)
let grades = [90, 85, 95]; // Array
let student = { name: "John", age: 18 }; // Object

// Pass by Value (Primitives)
let a = 10;
let b = a; // Copy of value is made
b = 20;
console.log("a is still:", a); // 10

// Pass by Reference (Objects/Arrays)
let listA = [1, 2, 3];
let listB = listA; // Reference is shared
listB.push(4);
console.log("listA is now:", listA); // [1, 2, 3, 4] (Both changed!)
