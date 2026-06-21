// Delete single document matching criteria
db.students.deleteOne({ name: "Charlie" });

// Delete all documents matching criteria
db.students.deleteMany({ age: { $lt: 18 } });

// DANGER: Clear entire collection documents
// db.students.deleteMany({});