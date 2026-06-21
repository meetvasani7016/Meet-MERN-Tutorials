import React, { useState } from 'react';

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [search, setSearch] = useState("");

  const addNote = () => {
    if (!noteText.trim()) return;
    setNotes([...notes, { id: Date.now(), text: noteText }]);
    setNoteText("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const filteredNotes = notes.filter(n => 
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h2>Notes Workspace</h2>
      <input 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        placeholder="Search notes..." 
        style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
      />
      <textarea 
        value={noteText} 
        onChange={e => setNoteText(e.target.value)} 
        placeholder="Write note here..." 
        style={{ width: '100%', height: '80px', padding: '8px' }}
      />
      <button onClick={addNote} style={{ marginTop: '10px' }}>Save Note</button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px' }}>
        {filteredNotes.map(n => (
          <div key={n.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '6px' }}>
            <p>{n.text}</p>
            <button onClick={() => deleteNote(n.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesApp;