import React from 'react';
import { useAppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <div className="theme-toggle">
      <h3>Theme Control</h3>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme} className="btn">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
