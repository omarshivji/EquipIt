import React from 'react';
import './AboutPage.css';
import NormNavbar from '../components/NormNavbar';
import Footer from '../components/Footer';


function AboutPage() {
  return (
    <div className="aboutPage">
      <NormNavbar />
      <header className="aboutPage-header">
      <img src="\EquipIt-logos\EquipIt-logos_transparent.png" alt="EquipIt" style={{ width: '300px', height: 'auto'}}/>
      </header>
      <main className="aboutPage-content">
        <section className="aboutPage-mission">
          <h2>Our Mission</h2>
          <p>
            At EquipIt, our mission is to provide fast, reliable, and secure delivery services to meet the needs of individuals and businesses, ensuring complete customer satisfaction.
          </p>
        </section>
        <section className="aboutPage-history">
          <h2>Our History</h2>
          <p>
            EquipIt was founded in 2022 by a student from the Canterbury Christ Church University. The initiative was to create a delivery service that would allow customers to get ordered goods, such as appliances and technological based products, delivered from local stores to their doorstep. 
          </p>
        </section>
        <section className="aboutPage-values">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity, Reliability, Innovation, Customer focus</li>
          
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
