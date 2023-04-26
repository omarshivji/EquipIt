import React from 'react';
import { Link } from 'react-router-dom';
// import './NormNavbar.css';

const NormNavbar = () => {
  return (
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
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NormNavbar;
