// client/src/NotesApp.jsx
import React, { useState, useEffect } from 'react';

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const API_URL = 'http://localhost:5000/api/notes';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const saveNote = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
    const newNote = await res.json();
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h2>MERN Notes Workspace</h2>
      <form onSubmit={saveNote}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Note Title..." />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Note content..." />
        <button type="submit">Save note</button>
      </form>
    </div>
  );
}

export default NotesApp;