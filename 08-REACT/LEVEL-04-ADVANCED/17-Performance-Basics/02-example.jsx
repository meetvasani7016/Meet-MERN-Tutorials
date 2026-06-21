import React, { useState, useMemo } from 'react';

function CalculationHelper() {
  const [num, setNum] = useState(1);
  const [text, setText] = useState("");

  // useMemo runs calculation ONLY when dependency variable [num] changes
  const computedFactorial = useMemo(() => {
    console.log("Running computed math calculation...");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);

  return (
    <div>
      <input type="number" value={num} onChange={e => setNum(Number(e.target.value))} />
      <p>Factorial calculation: {computedFactorial}</p>
      
      {/* Typing text updates text state, but does not trigger computedFactorial re-run! */}
      <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type stuff..." />
    </div>
  );
}

export default CalculationHelper;