// 1. JavaScript Object
const databaseRecord = {
  employeeId: 409,
  name: "Bob",
  departments: ["HR", "PR"],
  activeStatus: true
};

// 2. Object => JSON String (Stringify)
const jsonString = JSON.stringify(databaseRecord);
console.log("JSON String format:", jsonString);
// Output is a flat text string: '{"employeeId":409,"name":"Bob","departments":["HR","PR"],"activeStatus":true}'
console.log("Type:", typeof jsonString); // "string"

// 3. JSON String => Object (Parse)
const parsedRecord = JSON.parse(jsonString);
console.log("Reconstructed Object Name:", parsedRecord.name); // "Bob"
console.log("Reconstructed Object Array:", parsedRecord.departments[0]); // "HR"

// 4. Strict JSON rules check
// The string below is invalid JSON because keys are not wrapped in double quotes
const invalidJSON = "{name: 'Alice'}";
try {
  JSON.parse(invalidJSON);
} catch (e) {
  console.log("Parsing failed:", e.message); // SyntaxError
}
