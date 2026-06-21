const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Student name is required'] },
  age: { type: Number, min: [16, 'Minimum age is 16'], required: true },
  email: { type: String, required: true, unique: true },
  enrolled: { type: Boolean, default: true }
});

const Student = mongoose.model('Student', studentSchema);

async function runDatabaseDemo() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/school_demo');
    console.log("Connected to local school database.");

    // Clear old data
    await Student.deleteMany({});

    // 1. Insert Student
    const student1 = new Student({
      name: "John Doe",
      age: 20,
      email: "john@test.com"
    });
    await student1.save();
    console.log("Inserted John Doe!");

    // 2. Retrieve Student
    const list = await Student.find({ enrolled: true });
    console.log("Active Students list:", list);

  } catch (e) {
    console.error("Database error:", e.message);
  } finally {
    await mongoose.disconnect();
  }
}

runDatabaseDemo();