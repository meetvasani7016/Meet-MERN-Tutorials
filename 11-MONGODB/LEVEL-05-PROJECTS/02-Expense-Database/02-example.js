const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true }, // Negative for cost, positive for income
  category: { type: String, enum: ['Food', 'Bills', 'Salary', 'Leisure'], required: true },
  date: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', expenseSchema);

async function runBudgetDemo() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/budget_demo');
    console.log("Connected to budget database.");

    // Clear records
    await Expense.deleteMany({});

    // Write mock records
    await Expense.insertMany([
      { description: "Salary", amount: 2000, category: "Salary" },
      { description: "Coffee", amount: -5, category: "Food" },
      { description: "Electricity", amount: -150, category: "Bills" }
    ]);

    // Aggregate balance query
    const stats = await Expense.aggregate([
      { $group: { _id: null, totalBalance: { $sum: "$amount" } } }
    ]);
    
    console.log("Total computed balance:", stats[0] ? stats[0].totalBalance : 0);

  } catch (e) {
    console.error("Budget error:", e.message);
  } finally {
    await mongoose.disconnect();
  }
}

runBudgetDemo();