import React, { createContext, useState, useContext } from 'react';

// Create Context
const AppContext = createContext();

// Context Provider Component
export const AppProvider = ({ children }) => {
  // Global state management
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({
    name: 'Guest',
    email: '',
    isLoggedIn: false
  });
  const [settings, setSettings] = useState({
    notifications: true,
    language: 'English',
    fontSize: 'medium'
  });

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // User login function
  const login = (name, email) => {
    setUser({
      name,
      email,
      isLoggedIn: true
    });
  };

  // User logout function
  const logout = () => {
    setUser({
      name: 'Guest',
      email: '',
      isLoggedIn: false
    });
  };

  // Update settings function
  const updateSettings = (newSettings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }));
  };

  // Value object to be shared across components
  const value = {
    theme,
    toggleTheme,
    user,
    login,
    logout,
    settings,
    updateSettings
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
