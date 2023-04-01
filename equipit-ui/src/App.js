import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import axios from 'axios';
//import { useState, useEffect } from 'react';
import './App.css'
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import LoginPage from './pages/LoginPage';
import Contact from './pages/contact.jsx';
import ProductsPage from './pages/ProductsPage';
// import Customers from './api/customers_api'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
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
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
