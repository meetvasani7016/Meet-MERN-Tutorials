import React, { useState } from 'react';

// Sibling A: Input controller
function TextSelector({ text, onTextChange }) {
  return (
    <input type="text" value={text} onChange={(e) => onTextChange(e.target.value)} />
  );
}

// Sibling B: Preview canvas
function TextRenderer({ text }) {
  return (
    <div className="preview border p-4 bg-gray-50">
      <h3>Active Render: {text || "(No Text)"}</h3>
    </div>
  );
}

// Parent: Master container holding states
function SyncedParent() {
  const [sharedText, setSharedText] = useState("");

  return (
    <div className="container">
      <TextSelector text={sharedText} onTextChange={setSharedText} />
      <hr />
      <TextRenderer text={sharedText} />
    </div>
  );
}

export default SyncedParent;