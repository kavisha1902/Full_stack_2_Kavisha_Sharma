import React from 'react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { theme, user } = useAppContext();

  return (
    <header className={`header ${theme}`}>
      <h1>React Context API Demo</h1>
      <p className="subtitle">Global State Management Example</p>
      <div className="header-info">
        <span className="theme-badge">Theme: {theme}</span>
        <span className="user-badge">
          {user.isLoggedIn ? `Welcome, ${user.name}!` : 'Guest User'}
        </span>
      </div>
    </header>
  );
};

export default Header;
