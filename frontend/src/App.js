import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import LoginPage from './pages/LoginPage';
import Contact from './pages/contact.jsx';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import CartContextProvider from './components/CartContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  const [cartItems, setCartItems] = useState([]);


  return (
    <CartContextProvider>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </CartContextProvider>
  );
}

export default App;
