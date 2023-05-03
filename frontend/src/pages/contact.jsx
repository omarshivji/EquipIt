import React from 'react';
import NormNavbar from '../components/NormNavbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div class="contact-text">
      <NormNavbar />
      <h1>Contact EquipIt</h1>
      <p>Thank you for considering EquipIt for your delivery needs. If you have any questions or would like to learn more about our services, please feel free to contact us using the information below:</p>
      <ul>
        <li><strong>Phone:</strong> 0123 456789</li>
        <li><strong>Email:</strong> support@equipitdelivers.com</li>
      </ul>
      <p>We look forward to hearing from you and helping you with your delivery needs.</p>
      <Footer/>
    </div>
    
    
  );
  
};

export default Contact;
