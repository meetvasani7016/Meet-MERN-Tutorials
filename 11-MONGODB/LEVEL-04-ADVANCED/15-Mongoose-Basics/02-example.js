const mongoose = require('mongoose');

// 1. Define Document Schema template with validations
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18 },
  major: { type: String, default: "General" }
});

// 2. Compile Schema into a query constructor Model
const Student = mongoose.model('Student', studentSchema);

// 3. Connect and write record
mongoose.connect('mongodb://localhost:27017/school')
  .then(async () => {
    console.log("Connected to MongoDB");
    const newStudent = new Student({ name: "Alice", age: 20, major: "CS" });
    await newStudent.save();
    console.log("Saved student via Mongoose!");
    mongoose.disconnect();
  });