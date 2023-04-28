import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const CustomerNavbar = () => {
const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
    
    console.log('User has been logged out');
    
  };



  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#e3f2fd' }}>
      <a className="navbar-brand" href="/">
        <img src="\EquipIt-logos\EquipIt-logos_black.png" alt="EquipIt" style={{ width: '125px', height: 'auto' }} />
      </a>
      <button className="navbar-toggler" type="button" onClick={handleNavClick}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarText" style={{ backgroundColor: '#e3f2fd' }}>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
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
              <Link className="nav-link" to="/checkout">Checkout</Link>
            </li>
          </ul>

          <Link to="/" className="btn btn-primary" onClick={handleLogout}>Log Out</Link>
        </div>
      </nav> 
  );
}

export default CustomerNavbar;
