import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css'


const AdminNavbar = () => {

const handleLogout = () => {
    window.location.href = "/";
}

const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark" >
      <a className="navbar-brand" href="/">
        <img src="\EquipIt-logos\EquipIt-logos_white.png" alt="EquipIt" style={{ width: '125px', height: 'auto' }} />
      </a>
      <button className="navbar-toggler" type="button" onClick={handleNavClick}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarText">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
              <Link className="nav-link" to="/stores">Stores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customers">Customers</Link>
            </li>
          </ul>
          <Link to="/" className="btn btn-primary" onClick={handleLogout}>Log Out</Link>
        </div>
      </nav> 
);
}

export default AdminNavbar;
