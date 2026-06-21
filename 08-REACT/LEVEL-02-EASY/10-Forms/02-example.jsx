import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    // Dynamic key assignment using input tag name attributes
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;