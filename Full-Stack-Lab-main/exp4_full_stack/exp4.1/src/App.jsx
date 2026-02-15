import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import UserProfile from './components/UserProfile';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <div className="cards-container">
            <div className="card">
              <ThemeToggle />
            </div>
            <div className="card">
              <UserProfile />
            </div>
            <div className="card">
              <Settings />
            </div>
          </div>
          
          <div className="info-section">
            <h2>About React Context API</h2>
            <p>
              This application demonstrates global state management using React Context API.
              The Context API allows you to share data across multiple components without 
              prop drilling.
            </p>
            <div className="features">
              <h3>Features Demonstrated:</h3>
              <ul>
                <li>✓ Creating Context using createContext()</li>
                <li>✓ Context Provider wrapping the application</li>
                <li>✓ Consuming state using useContext() hook</li>
                <li>✓ Storing and updating global state (theme, user, settings)</li>
                <li>✓ Multiple components accessing shared state</li>
                <li>✓ Custom hook for cleaner context consumption</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
