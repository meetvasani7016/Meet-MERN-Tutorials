// Update single document field
db.students.updateOne(
  { name: "Bob" },
  { $set: { major: "Engineering" } }
);

// Increment numeric value (add 1 to age)
db.students.updateOne(
  { name: "Alice" },
  { $inc: { age: 1 } }
);

// Update multiple documents matching criteria
db.students.updateMany(
  { age: { $gt: 20 } },
  { $set: { status: "Active" } }
);