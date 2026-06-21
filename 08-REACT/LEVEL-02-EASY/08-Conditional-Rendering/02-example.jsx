import React, { useState } from 'react';

function StatusChecker() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="status-panel">
      {/* 1. Ternary Operator: if/else mapping */}
      <h2>User Status: {isLogged ? "Signed In" : "Signed Out"}</h2>
      
      {/* 2. Logic && Operator: conditional render of notification */}
      {isLogged && <div class="msg">Welcome back, Developer!</div>}

      <button onClick={() => setIsLogged(!isLogged)}>
        {isLogged ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default StatusChecker;