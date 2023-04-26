import React, { useState } from 'react';
import axios from "axios";
import './LoginPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import NormNavbar from '../components/NormNavbar';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [error, setError] = useState('');


  const login = () => {
    axios.post("http://localhost:8000/login", {
      username: username,
      password: password
    })
    .then(response => {
      console.log(response);
      setIsLoginSuccessful(true);
      setError('');
      toast.success('Login successful!');
    })
    .catch(error => {
      console.log(error);
      setError('');
      setIsLoginSuccessful(false);
      toast.error('Login failed!');
    });
  }

  return (
    <div className="login-page">
      <NormNavbar />
      <h1>Login</h1>
      {isLoginSuccessful && <p>Login successful!</p>}
      {error && <p className="error">{error}</p>}
      <label>Username: </label>
      <input type="text" onChange={(event) => {
        setUsername(event.target.value);
      }} />
      <label>Password: </label>
      <input type="password" onChange={(event) => {
        setPassword(event.target.value);
      }} />
     <Link to="/products" className="btn btn-primary" onClick={login}>Login</Link>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
