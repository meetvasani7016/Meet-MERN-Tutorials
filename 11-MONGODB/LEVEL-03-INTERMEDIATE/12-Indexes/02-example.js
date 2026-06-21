// Create single field index
db.students.createIndex({ major: 1 });

// Create unique index (prevents duplicate emails)
db.students.createIndex({ email: 1 }, { unique: true });

// Check active collection indexes
db.students.getIndexes();

// Verify query speeds and index scans
db.students.find({ major: "Math" }).explain("executionStats");