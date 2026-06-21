// Insert single document record
db.students.insertOne({
  name: "Alice",
  age: 20,
  major: "Computer Science"
});

// Insert multiple documents
db.students.insertMany([
  { name: "Bob", age: 22, major: "Math" },
  { name: "Charlie", age: 21, major: "Physics" }
]);