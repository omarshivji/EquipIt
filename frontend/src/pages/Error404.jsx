import React from 'react';
import NormNavbar from '../components/NormNavbar';
import './Error404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <NormNavbar />
      <div className="error-content">
        <h1>404 Not Found</h1>
        <h2>Oops! Something went wrong, please try again later.</h2>
      </div>
    </div>
  );
};

export default Error404;

