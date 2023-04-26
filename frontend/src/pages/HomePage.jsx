import React from 'react';
import NormNavbar from '../components/NormNavbar';
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
            Equipit is a leading delivery company providing fast, reliable, and secure services to cater to your personal and business needs.
          </p>
        </section>
        <section className="homePage-services">
          <h2>Our Services</h2>
          <ul>
            <li>Same-day delivery</li>
            <li>Express delivery</li>
            <li>International delivery</li>
            <li>Customized delivery solutions</li>
          </ul>
        </section>
        <section className="homePage-contact">
          <h2>Contact Us</h2>
          <p>Phone: (555) 123-4567</p>
          <p>Email: support@equipitdelivers.com</p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
