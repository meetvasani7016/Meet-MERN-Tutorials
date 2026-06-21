// Limit results to top 2 records
db.students.find().limit(2);

// Skip first 2 records, return next 2 (Pagination Page 2)
db.students.find().sort({ name: 1 }).skip(2).limit(2);

// Pagination Page 3 (items 5-6)
db.students.find().sort({ name: 1 }).skip(4).limit(2);