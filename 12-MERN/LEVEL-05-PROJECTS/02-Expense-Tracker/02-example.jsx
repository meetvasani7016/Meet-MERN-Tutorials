// client/src/ExpenseApp.jsx
import React, { useState, useEffect } from 'react';

function ExpenseApp() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const API_URL = 'http://localhost:5000/api/expenses';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const addExpense = async (e) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: text, amount: parseFloat(amount) })
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
    setText("");
    setAmount("");
  };

  const balance = items.reduce((acc, i) => acc + i.amount, 0);

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
      <h2>Finance Tracker</h2>
      <h3>Total Balance: ${balance.toFixed(2)}</h3>
      <form onSubmit={addExpense}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Description..." />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExpenseApp;