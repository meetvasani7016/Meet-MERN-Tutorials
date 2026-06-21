// Sort by age ascending (youngest first)
db.students.find().sort({ age: 1 });

// Sort by age descending (oldest first)
db.students.find().sort({ age: -1 });

// Sort by multiple fields (major alphabetically, then age descending)
db.students.find().sort({ major: 1, age: -1 });