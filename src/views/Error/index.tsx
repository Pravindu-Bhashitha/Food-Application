import React from 'react';
import errorImage from '../../assets/images/ErrorImage.PNG';
import './index.css'; // Import the CSS file

const Error = () => {
  return (
    <div className="error-container">
      <img src={errorImage} alt="Error" className="error-image" />
      <div className="error-text">
        <h1 className="error-title">Oops! Something went wrong.</h1>
        <p className="error-message">We apologize for the inconvenience. Please try again later.</p>
      </div>
    </div>
  );
};

export default Error;
