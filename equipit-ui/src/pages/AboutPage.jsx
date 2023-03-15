import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="aboutPage">
      <header className="aboutPage-header">
        <h1>About EquipitDelivers</h1>
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
    </div>
  );
}

export default AboutPage;
