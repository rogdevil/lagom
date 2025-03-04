import Hero from './Hero';
import './index.css';
import React from 'react';
import SectionOne from './section1';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <SectionOne />
    </div>
  );
};

export default Home;
