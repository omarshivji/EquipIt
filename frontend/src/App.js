import React from 'react';
import { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import LoginPage from './pages/LoginPage';
import Contact from './pages/Contact.jsx';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import Cart from './pages/Cart';
import CartProvider from './components/CartContext';
import AdminOrders from './pages/AdminOrders';
import { CartContext } from './components/CartContext';
import ProductContextProvider from './components/ProductContext';
import Checkout from './pages/Checkout';
import AdminCustomers from './pages/AdminCustomers';
import AdminStores from './pages/AdminStores';


function App() {
  const { cartItems, addToCart } = useContext(CartContext);


  return (
    <CartProvider>
      <ProductContextProvider>
    <Router> 
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <a className="navbar-brand" href="/">
          <img src="\EquipIt-logos\EquipIt-logos_black.png" alt="EquipIt"  style={{ width: '100px', height: 'auto' }}/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customers">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stores">Stores</Link>
            </li>

          </ul>
          
        </div>
      </nav> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<AdminOrders/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customers" element={<AdminCustomers />} />
          <Route path="/stores" element={<AdminStores />} />
        </Routes>
      </div>
    </Router>
    </ProductContextProvider>
    </CartProvider>
  );
}

export default App;
