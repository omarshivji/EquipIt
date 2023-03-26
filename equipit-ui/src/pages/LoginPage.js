// LoginPage.js
import React, { useState } from 'react';
import { login as apiLogin } from '../api/login_api'; // Import the login function from your API helper file
import './LoginPage.css';


const apiLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await apiLogin({ email, password });
      console.log('Login successful:', token);
    } catch (err) {
      setError(err.message || 'An error occurred while logging in.');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        </form><Link className="btn btn-success" to={'/ProductsPage'} ></Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
