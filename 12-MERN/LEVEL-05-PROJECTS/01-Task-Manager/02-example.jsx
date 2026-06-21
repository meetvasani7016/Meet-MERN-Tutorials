// Simulated unified React code
import React, { useState, useEffect } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = 'http://localhost:5000/api/tasks';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      });
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setTitle("");
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    setTasks(tasks.filter(t => t._id !== id));
  };

  if (loading) return <p>Loading workspace...</p>;

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>
      <h2>MERN Task Board</h2>
      <form onSubmit={addTask}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Add task..." />
        <button type="submit">Submit</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map(t => (
          <li key={t._id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
            <span>{t.title}</span>
            <button onClick={() => deleteTask(t._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;