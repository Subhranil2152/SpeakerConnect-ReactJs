import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from './Designer.png';

export default class Landing extends Component {
  render() {
    const leftSideStyle = {
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      width: '30%', 
    };

    const rightSideStyle = {
      height: '100vh',
      width: '70%',
      backgroundColor: '#243642', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
    };

    const containerStyle = {
      display: 'flex',
      hight: '100vh',
      width: '100%',
      overflow: 'hidden',
    };

    const buttonStyle = {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '16px',
      color: '#243642',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    };

    return (
      <div style={containerStyle}>
        <div style={leftSideStyle}></div>
        <div style={rightSideStyle}>
          <h1>Welcome to Our Website!</h1>
          <p>We're glad to have you here. Explore our content and learn more about what we offer.</p>
          <Link to="/home">
            <button style={buttonStyle}>Find Your Speaker</button>
          </Link>
        </div>
      </div>
    );
  }
}