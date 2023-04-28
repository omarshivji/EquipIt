import React from 'react';
import NormNavbar from '../components/NormNavbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <NormNavbar />
      <h1>Contact EquipIt</h1>
      <p>Thank you for considering EquipIt for your delivery needs. If you have any questions or would like to learn more about our services, please feel free to contact us using the information below:</p>
      <ul>
        <li><strong>Phone:</strong> 555-555-5555</li>
        <li><strong>Email:</strong> info@equipit.com</li>
        <li><strong>Address:</strong> 123 Main Street, Anytown USA 12345</li>
      </ul>
      <p>We look forward to hearing from you and helping you with your delivery needs.</p>
      <Footer/>
    </div>
    
    
  );
  
};

export default Contact;
