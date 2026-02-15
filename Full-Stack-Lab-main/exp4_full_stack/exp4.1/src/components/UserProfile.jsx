import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const UserProfile = () => {
  const { user, login, logout } = useAppContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && email) {
      login(name, email);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="user-profile">
      <h3>User Profile</h3>
      {user.isLoggedIn ? (
        <div className="user-info">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Status:</strong> Logged In</p>
          <button onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
