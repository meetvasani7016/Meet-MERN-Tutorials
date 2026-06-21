import React, { useState, useEffect } from 'react';

function UserProfiles() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error("Network connection error");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading profiles...</p>;
  if (error) return <p class="error">Error: {error}</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
    </ul>
  );
}

export default UserProfiles;