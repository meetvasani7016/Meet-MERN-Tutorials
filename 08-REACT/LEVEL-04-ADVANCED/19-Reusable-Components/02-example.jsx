import React from 'react';

// Reusable customizable Button component
function Button({ label, onClick, variant = "primary", size = "md" }) {
  const baseStyles = "px-4 py-2 font-bold rounded-lg transition-colors";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    secondary: "bg-slate-200 hover:bg-slate-300 text-slate-800",
    danger: "bg-red-600 hover:bg-red-700 text-white"
  };

  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-lg px-6 py-3"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {label}
    </button>
  );
}

export default Button;