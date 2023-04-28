import React, { useState } from 'react';
import axios from "axios";
import './LoginPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import NormNavbar from '../components/NormNavbar';
import Footer from '../components/Footer';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminusername, setAdminUsername] = useState('');
  const [adminpassword, setAdminPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [error, setError] = useState('');


  const login = () => {
    axios.post("http://localhost:8000/login/authenticate", {
      username: username,
      password: password
    })
    .then(response => {
      console.log(response);
      setIsLoginSuccessful(true);
      setError('');
      toast.success('Login successful!');
      window.location.href = "/products";

    })
    .catch(error => {
      console.log(error);
      setError('');
      setIsLoginSuccessful(false);
      toast.error('Login failed!');
    });
  }

  const adminlogin = () => {
    axios.post("http://localhost:8000/admin/authenticate", {
      username: adminusername,
      password: adminpassword
    })
    .then(response => {
      console.log(response);
      setIsLoginSuccessful(true);
      setError('');
      toast.success('Login successful!');
      window.location.href = "/stores";
    })
    .catch(error => {
      console.log(error);
      setError('');
      setIsLoginSuccessful(false);
      toast.error('Login failed!');
    });
  }

  return (
    <div className="login-left">
    <NormNavbar />
    <h1>Admin Login</h1>
    {isLoginSuccessful && (
      <>
        <p>Login successful!</p>
        <Link to="/stores"></Link>
      </>
    )}
    {error && <p className="error">{error}</p>}
    <label>Admin Username: </label>
    <input type="text" onChange={(event) => {
      setAdminUsername(event.target.value);
    }} />
    <label>Password: </label>
    <input type="password" onChange={(event) => {
      setAdminPassword(event.target.value);
    }} />
    <button className="btn btn-primary" onClick={adminlogin}>Login</button>

    <h1>Login</h1>
    {isLoginSuccessful && (
      <>
        <p>Login successful!</p>
        <Link to="/products"></Link>
      </>
    )}
    {error && <p className="error">{error}</p>}
    <div className="login-right">
    <label>Username: </label>
    <input type="text" onChange={(event) => {
      setUsername(event.target.value);
    }} />
    <label>Password: </label>
    <input type="password" onChange={(event) => {
      setPassword(event.target.value);
    }} />
    <p>Haven't got an account? <Link to="/register">Register here</Link></p>
    <button className="btn btn-primary" onClick={login}>Login</button>

    <ToastContainer />
    <Footer />
  </div>
  </div>
  );
}
  

export default LoginPage;
