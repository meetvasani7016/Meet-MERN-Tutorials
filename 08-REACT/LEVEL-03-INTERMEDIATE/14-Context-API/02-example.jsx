import React, { createContext, useContext, useState } from 'react';

// 1. Create Context Object
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  return (
    // 2. Broadcast Context values
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Child consuming broadcast data directly
export function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className={theme}>
      Set to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}