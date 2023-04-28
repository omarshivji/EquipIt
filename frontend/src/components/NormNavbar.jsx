import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Normal Navbar component for the normal pages of the website (Home, About, Contact, Login and Register)

const NormNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

   return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
      <a className="navbar-brand" href="/">
        <img src="\EquipIt-logos\EquipIt-logos_black.png" alt="EquipIt" style={{ width: '125px', height: 'auto' }} />
      </a>
      <button className="navbar-toggler" type="button" onClick={handleNavClick}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarText" style={{ backgroundColor: '#e3f2fd' }}>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
            Contact Us
            </Link>
          </li>
      </ul>
  </div>
</nav>
);
};

export default NormNavbar;
