import React from 'react';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <RegistrationForm />

        <div className="info-section">
          <h2>About Controlled Components</h2>
          <p>
            In React, controlled components are form elements whose values are controlled by React state.
            This provides complete control over user input and enables real-time validation,
            conditional logic, and dynamic form behavior.
          </p>

          <div className="features">
            <h3>Key Concepts Demonstrated:</h3>
            <ul>
              <li>✓ <strong>useState Hook</strong>: Managing form state with React hooks</li>
              <li>✓ <strong>Controlled Inputs</strong>: Input values controlled by component state</li>
              <li>✓ <strong>Event Handlers</strong>: onChange events to update state</li>
              <li>✓ <strong>Form Validation</strong>: Real-time and submission validation</li>
              <li>✓ <strong>Multiple Input Types</strong>: Text, email, password, radio, checkbox, select, textarea</li>
              <li>✓ <strong>Error Handling</strong>: Display validation errors to users</li>
              <li>✓ <strong>Form Submission</strong>: Prevent default and handle data</li>
              <li>✓ <strong>Conditional Rendering</strong>: Show success message after submission</li>
            </ul>
          </div>

          <div className="form-flow">
            <h3>Controlled Component Flow:</h3>
            <div className="flow-steps">
              <div className="flow-step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <strong>User Input</strong>
                  <p>User types in form field</p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <strong>onChange Event</strong>
                  <p>Event handler is triggered</p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <strong>Update State</strong>
                  <p>State is updated with new value</p>
                </div>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <span className="step-number">4</span>
                <div className="step-content">
                  <strong>Re-render</strong>
                  <p>Component re-renders with new value</p>
                </div>
              </div>
            </div>
          </div>

          <div className="validation-info">
            <h3>Form Validations Implemented:</h3>
            <div className="validation-grid">
              <div className="validation-item">
                <strong>Required Fields</strong>
                <p>All fields except bio are mandatory</p>
              </div>
              <div className="validation-item">
                <strong>Email Format</strong>
                <p>Valid email pattern required</p>
              </div>
              <div className="validation-item">
                <strong>Password Match</strong>
                <p>Passwords must match</p>
              </div>
              <div className="validation-item">
                <strong>Phone Format</strong>
                <p>Must be 10 digits</p>
              </div>
              <div className="validation-item">
                <strong>Length Checks</strong>
                <p>Minimum/maximum character limits</p>
              </div>
              <div className="validation-item">
                <strong>Selection Required</strong>
                <p>Radio, checkbox, select validations</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
