import React, { useState } from 'react';

function FormEventHandler() {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e) => {
    // e.target.value accesses the value of the active HTML input tag
    setInputVal(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Blocks default form page reload reload
    alert("Submitted value: " + inputVal);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputVal} onChange={handleInputChange} />
      <button type="submit">Submit Info</button>
    </form>
  );
}

export default FormEventHandler;