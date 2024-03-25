import React from 'react';
import errorImage from '../../assets/images/ErrorImage.PNG'; // Import your error image here

const Error = () => {
  return (
    <div style={styles.container}>
      <img src={errorImage} alt="Error" style={styles.image} />
      <div style={styles.text}>
        <h1 style={styles.title}>Oops! Something went wrong.</h1>
        <p style={styles.message}>We apologize for the inconvenience. Please try again later.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  image: {
    width: '300px',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    animation: 'bounce 1s infinite alternate',
  },
  text: {
    textAlign: 'center' as 'center',
  },
  title: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '10px',
    fontFamily: 'Arial, sans-serif',
  },
  message: {
    fontSize: '16px',
    color: '#666',
    fontFamily: 'Arial, sans-serif',
  },
  '@keyframes bounce': {
    '0%': { transform: 'translateY(-5px)' },
    '100%': { transform: 'translateY(5px)' },
  },
};

export default Error;
