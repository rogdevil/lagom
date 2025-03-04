import './section2.css';
import React from 'react';
import Logo from '../../assets/images/logo-1.jpg';
import Logo2 from '../../assets/images/logo-2.jpg';

const SectionTwo = () => {
  return (
    <div className="section2-wrapper">
      <div className="img-card">
        <div className="content">
          <div className="hero-chip">
            <p>About Us</p>
          </div>
          <p className="heading-2">Tokenization as a Service</p>
          <p className="description">
            We help Web2 companies plan and develop their Web3 ecosystem through personalized
            support
          </p>
        </div>
        <div className="img">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <p className="bold-text">5+</p>
          <p className="lable">Projects</p>
        </div>
        <div className="card">
          <p className="bold-text">40 million+</p>
          <p className="lable">Users</p>
        </div>
      </div>
      <p className="heading-2">Explore All products on Lagom</p>
      <div className="dark-card">
        <p className="heading-2">How Should You Tokenize</p>
        <p className="description">
          Our Consultants provide end-to-end tokenization services from ideation, execution,
          fundraise to launch and growth.
        </p>
        <div className="img-container">
          <img src={Logo2} alt="logo-2" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
