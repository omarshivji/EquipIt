import './navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            
          </ul>
        </nav>
  );
};

export default nav;
