// 1. const - Read-only block-scoped variable
const secondsInMinute = 60;
// secondsInMinute = 70; // ERROR! Cannot reassign a constant.

// 2. let - Changeable block-scoped variable
let score = 10;
score = 20; // Reassignment is perfectly fine!
// let score = 30; // ERROR! Cannot redeclare in same scope.

// 3. var - Legacy function-scoped variable (AVOID THIS!)
var user = "Alice";
var user = "Bob"; // Redeclaring var is allowed (causes bugs!).

// 4. Block Scope Demo
{
  let blockVariable = "Invisible outside";
  var functionVariable = "Visible outside";
}
// console.log(blockVariable); // ReferenceError: blockVariable is not defined
console.log(functionVariable); // "Visible outside" (var leaks out of blocks!)

// 5. Hoisting (Declarations are processed first)
console.log(hoistedVar); // undefined (declaration hoisted, not value)
var hoistedVar = "Hello Hoisting";
