// 1. Template Literals & Arrow Functions
const user = "Meet";
const greet = (name) => `Welcome back, ${name}!`; // Note escaped backticks
console.log(greet(user));

// 2. Destructuring (Object and Array)
const person = { name: "Alice", age: 25, job: "Developer" };
const { name, job } = person; // Extracts keys into variables
console.log("Extracted name:", name, "and job:", job);

const rgb = [255, 0, 128];
const [red, green, blue] = rgb; // Unpacks indexes in order
console.log("Red value:", red);

// 3. Spread Operator (Clones or merges arrays/objects)
const originalList = [1, 2, 3];
const copiedList = [...originalList, 4, 5]; // Copies items and appends
console.log("Copied list:", copiedList);

const basicDetails = { brand: "Ford" };
const fullDetails = { ...basicDetails, model: "Mustang", year: 2024 };
console.log("Merged Object:", fullDetails);

// 4. Optional Chaining (?.)
const member = { id: 101, contacts: null };
// console.log(member.contacts.phone); // ERROR: Cannot read properties of null
console.log("Safe phone access:", member?.contacts?.phone); // undefined (No crash!)
