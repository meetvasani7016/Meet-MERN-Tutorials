import React, { useState } from 'react';

function ExpenseTracker() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;
    setItems([...items, { id: Date.now(), text, amount: parseFloat(amount) }]);
    setText("");
    setAmount("");
  };

  const balance = items.reduce((acc, item) => acc + item.amount, 0);
  const income = items.filter(i => i.amount > 0).reduce((acc, i) => acc + i.amount, 0);
  const expense = items.filter(i => i.amount < 0).reduce((acc, i) => acc + i.amount, 0);

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '25px', border: '1px solid #eee' }}>
      <h2>Budget Tracker</h2>
      <h3>Balance: ${balance.toFixed(2)}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
        <h4 style={{ color: 'green' }}>Income: ${income.toFixed(2)}</h4>
        <h4 style={{ color: 'red' }}>Expense: ${Math.abs(expense).toFixed(2)}</h4>
      </div>
      <form onSubmit={addTransaction}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Description (e.g. Salary, Rent)" />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount (+ for income, - for cost)" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseTracker;