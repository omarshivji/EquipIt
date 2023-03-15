import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <header className="homePage-header">
        <h1>EquipitDelivers</h1>
        <p>Your trusted delivery partner</p>
      </header>
      <main className="homePage-content">
        <section className="homePage-about">
          <h2>About Us</h2>
          <p>
            EquipitDelivers is a leading delivery company providing fast, reliable, and secure services to cater to your personal and business needs.
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
