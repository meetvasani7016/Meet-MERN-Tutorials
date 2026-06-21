import React from 'react';

// Destructuring props parameters directly in argument lists
function MemberCard({ name, role = "Apprentice", activeStatus }) {
  return (
    <div className="member bg-slate-100 p-4 rounded shadow">
      <h5>Name: {name}</h5>
      <p>Role: {role}</p>
      <p>Status: {activeStatus ? "Online" : "Offline"}</p>
    </div>
  );
}

function TeamList() {
  return (
    <section>
      {/* Passing different prop types: string (name), boolean (activeStatus) */}
      <MemberCard name="Alice" role="Lead Engineer" activeStatus={true} />
      <MemberCard name="Bob" activeStatus={false} />
    </section>
  );
}

export default TeamList;