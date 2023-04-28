import React from 'react';
import NormNavbar from '../components/NormNavbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <NormNavbar />
      <header className="homePage-header">
        <img src="\EquipIt-logos\EquipIt-logos_transparent.png" alt="EquipIt"  style={{ width: '300px', height: 'auto' }}/>
      </header>
      <main className="homePage-content">
        <section className="homePage-about">
          <h2>About Us</h2>
          <p>
            Equipit is a e-commerce same day delivery service which adopts local stores and delivers goods to YOUR doorstep! Don't have a account? <Link to="/register">Sign up here</Link>
          </p>
        </section>
        <section className="homePage-services">
          <h2>Our Services</h2>
          <ul>
            <li>Same-day delivery</li>
            <li>Get what you want delivered from local stores.</li>
            <li>Local delivery</li>
            <li>2-hour delivery times!</li>
          </ul>
        </section>
        <section className="homePage-contact">
          <h2>Contact Us</h2>
          <p>Phone: 01234 56789</p>
          <p>Email: support@equipitdelivers.com</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
