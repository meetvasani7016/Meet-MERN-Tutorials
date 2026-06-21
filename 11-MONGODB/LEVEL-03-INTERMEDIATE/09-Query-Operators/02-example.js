// 1. Comparison operators (age >= 21)
db.students.find({ age: { $gte: 21 } });

// 2. Range comparisons (age between 18 and 22)
db.students.find({ age: { $gt: 18, $lt: 22 } });

// 3. Or logical condition (major is Math OR Physics)
db.students.find({
  $or: [
    { major: "Math" },
    { major: "Physics" }
  ]
});