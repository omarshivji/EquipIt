import React from 'react';
//import './AboutPage.css';
import NormNavbar from '../components/NormNavbar';
import Footer from '../components/Footer';


function AboutPage() {
  return (
    <div className="aboutPage">
      <NormNavbar />
      <header className="aboutPage-header">
      <img src="\EquipIt-logos\EquipIt-logos_black.png" alt="EquipIt" style={{ width: '300px', height: 'auto'}}/>
      </header>
      <main className="aboutPage-content">
        <section className="aboutPage-mission">
          <h2>Our Mission</h2>
          <p>
            At EquipitDelivers, our mission is to provide fast, reliable, and secure delivery services to meet the needs of individuals and businesses, ensuring complete customer satisfaction.
          </p>
        </section>
        <section className="aboutPage-history">
          <h2>Our History</h2>
          <p>
            EquipitDelivers was founded in 20XX by a team of logistics experts who saw the need for a more efficient and customer-centric approach to delivery services. Over the years, we have expanded our operations to serve clients across the globe, offering a range of services tailored to their unique requirements.
          </p>
        </section>
        <section className="aboutPage-values">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Reliability</li>
            <li>Innovation</li>
            <li>Customer focus</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
