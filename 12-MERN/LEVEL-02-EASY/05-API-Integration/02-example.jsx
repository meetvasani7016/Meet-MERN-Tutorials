// client/src/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <div>
      <h2>MERN Tasks</h2>
      <ul>{tasks.map(t => <li key={t._id}>{t.title}</li>)}</ul>
    </div>
  );
}

export default App;