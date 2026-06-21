import React, { useState } from 'react';

function CounterApp() {
  // useState hooks parameters: [variable, setter] = useState(initialValue)
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-box">
      <h2>Tally Count: {count}</h2>
      <button onClick={decrement}>- Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+ Increase</button>
    </div>
  );
}

export default CounterApp;