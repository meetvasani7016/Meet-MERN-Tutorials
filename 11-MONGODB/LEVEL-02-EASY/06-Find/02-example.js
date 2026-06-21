// Fetch all documents in collection
db.students.find({});

// Find single document matching criteria
db.students.findOne({ name: "Alice" });

// Find documents with projection (1 to include, 0 to exclude)
// Returns only name and major fields, hides _id keys
db.students.find(
  { age: 21 },
  { name: 1, major: 1, _id: 0 }
);