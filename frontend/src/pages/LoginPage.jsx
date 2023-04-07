// LoginPage.js
import React, { useState } from 'react';
import axios from "axios";
import './LoginPage.css';

const LoginPage = () => {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [error, setError] = useState('');

  const login = () => {
    axios.get("http://localhost:8000/customers", {
      email: getEmail,
      password: getPassword
    }).then((response) => {
      console.log(response);
      setIsLoginSuccessful(true);
      setError('');
    }).catch(error => {
      console.log(error);
      setError('Incorrect email or password');
      setIsLoginSuccessful(false);
    });
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      {isLoginSuccessful && <p>Login successful!</p>}
      {error && <p className="error">{error}</p>}
      <label>Email: </label>
      <input type="text" onChange={(event) => {
        setEmail(event.target.value);
      }} />
      <label>Password: </label>
      <input type="text" onChange={(event) => {
        setPassword(event.target.value);
      }} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;
