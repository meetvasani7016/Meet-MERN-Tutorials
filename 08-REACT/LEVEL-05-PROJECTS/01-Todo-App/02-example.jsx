import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('react_todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem('react_todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Todo List</h3>
      <form onSubmit={addTodo}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="New Task..." />
        <button type="submit">Add</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map(t => (
          <li key={t.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0' }}>
            <span 
              onClick={() => toggleTodo(t.id)} 
              style={{ textDecoration: t.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;