// --- file: math.js (Example module exports) ---
// // Named Export: Export individual elements (can be multiple)
// export const PI = 3.14159;
// export const multiply = (a, b) => a * b;
// 
// // Default Export: Export one core element per file
// export default function greetModule() {
//   return "Hello from Math Module!";
// }

// --- file: app.js (Example module imports) ---
// // Importing Named Exports (must match names inside curly braces)
// import { PI, multiply } from "./math.js";
//
// // Importing Named Exports with a rename alias
// import { multiply as product } from "./math.js";
//
// // Importing Default Exports (no curly braces needed, name it whatever you want)
// import defaultGreeting from "./math.js";
//
// // Importing Everything as a single namespace object
// import * as MathUtils from "./math.js";

console.log("Modules utilize 'import' and 'export' statements to structure clean dependencies.");
