// 1. Function Declaration (Hoisted - can be defined below call)
let result = calculateTax(100);
console.log("Taxed Total:", result);

function calculateTax(price, taxRate = 0.1) { // taxRate has default value
  return price + (price * taxRate);
}

// 2. Function Expression (Not Hoisted - must define before calling)
const double = function(num) {
  return num * 2;
};
console.log("Double of 8:", double(8));

// 3. Arrow Function (Clean modern ES6 syntax)
const subtract = (a, b) => a - b; // Implicit return for single line!
console.log("Subtraction:", subtract(10, 4));

// 4. Callback Function (Passing functions as arguments)
function alertUser(username, formatCallback) {
  let formattedName = formatCallback(username);
  console.log("SYSTEM UPDATE: Welcome " + formattedName);
}

const uppercaseName = (name) => name.toUpperCase();
alertUser("meet", uppercaseName); // Outputs: "SYSTEM UPDATE: Welcome MEET"
