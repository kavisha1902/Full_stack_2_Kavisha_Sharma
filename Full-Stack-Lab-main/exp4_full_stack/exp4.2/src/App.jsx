import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import History from './components/History';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="content-grid">
          <div className="left-section">
            <Counter />
          </div>
          <div className="right-section">
            <History />
          </div>
        </div>

        <div className="info-section">
          <h2>About Redux State Management</h2>
          <p>
            This application demonstrates centralized state management using Redux Toolkit.
            Redux provides a predictable state container that stores the entire application
            state in a single global store.
          </p>
          <div className="features">
            <h3>Redux Concepts Demonstrated:</h3>
            <ul>
              <li>✓ <strong>Store</strong>: Centralized state container using configureStore()</li>
              <li>✓ <strong>Slice</strong>: Combines reducers and actions using createSlice()</li>
              <li>✓ <strong>Actions</strong>: increment, decrement, incrementByAmount, reset</li>
              <li>✓ <strong>Reducers</strong>: Pure functions that update state immutably</li>
              <li>✓ <strong>Selectors</strong>: Functions to extract data from state</li>
              <li>✓ <strong>useSelector</strong>: Hook to read state from the store</li>
              <li>✓ <strong>useDispatch</strong>: Hook to dispatch actions</li>
              <li>✓ <strong>Immutability</strong>: State updates don't mutate the original state</li>
            </ul>
          </div>

          <div className="redux-flow">
            <h3>Redux Data Flow:</h3>
            <div className="flow-steps">
              <div className="flow-step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <strong>User Action</strong>
                  <p>User clicks a button (e.g., Increment)</p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <strong>Dispatch Action</strong>
                  <p>dispatch(increment()) sends action to store</p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <strong>Reducer Updates State</strong>
                  <p>Reducer processes action and returns new state</p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">4</span>
                <div className="step-content">
                  <strong>UI Re-renders</strong>
                  <p>Components using useSelector update automatically</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
