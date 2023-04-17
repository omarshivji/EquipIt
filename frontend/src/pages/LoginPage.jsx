// LoginPage.js
import React, { useState } from 'react';
import axios from "axios";
import './LoginPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginPage = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [error, setError] = useState('');

  const login = () => {
    axios.post("http://localhost:8000/login", {
      username: username,
      password: password
    }).then((response) => {
      console.log(response);
      setIsLoginSuccessful(true);
      toast.success('Login successful!')
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
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
