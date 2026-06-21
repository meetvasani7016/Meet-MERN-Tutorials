import React from 'react';

function JSXExample() {
  const username = "Jane Doe";
  const userRole = "Developer";
  const inlineStyles = { color: 'indigo', fontWeight: 'bold' };

  return (
    // JSX must return a single root element. We use a Fragment (<>...</>) to group elements
    <>
      <div className="profile-card">
        <h1 style={inlineStyles}>Hello, {username}!</h1>
        <p>Your current job role is: <strong>{userRole}</strong></p>
        <label htmlFor="user-status">Status: </label>
        <input type="text" id="user-status" disabled={false} placeholder="Active" />
      </div>
    </>
  );
}

export default JSXExample;