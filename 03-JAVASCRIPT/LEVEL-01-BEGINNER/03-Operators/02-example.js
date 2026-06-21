// 1. Arithmetic & Remainder (Modulo)
let price1 = 15;
let price2 = 4;
console.log("Exponent (15^4):", price1 ** price2);
console.log("Remainder of 15 / 4:", price1 % price2); // 3 (15 = 4*3 + 3)

// 2. Comparison: Double vs Triple Equals
let num = 5;
let strNum = "5";
console.log("Loose equals (==):", num == strNum);   // true (coerced types)
console.log("Strict equals (===):", num === strNum); // false (different types)

// 3. Logical Operators
let hasDriverLicense = true;
let isSober = false;
let canDrive = hasDriverLicense && isSober;
console.log("Can drive legally?", canDrive); // false
console.log("Need designated driver?", !isSober); // true

// 4. Ternary Operator (Shorthand if/else)
let score = 85;
let grade = score >= 50 ? "Pass" : "Fail";
console.log("Grade result:", grade); // "Pass"
