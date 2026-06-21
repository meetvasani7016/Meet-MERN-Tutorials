db.students.aggregate([
  // Stage 1: Filter students (only those older than 19)
  { $match: { age: { $gt: 19 } } },
  
  // Stage 2: Group by major, calculate student count and average age
  { $group: {
      _id: "$major",
      studentCount: { $sum: 1 },
      averageAge: { $avg: "$age" }
  } },

  // Stage 3: Sort by student count descending
  { $sort: { studentCount: -1 } }
]);