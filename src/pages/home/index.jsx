import Hero from './Hero';
import './index.css';
import React from 'react';
import SectionOne from './section1';
import SectionTwo from './section2';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <SectionOne />
      <SectionTwo />
    </div>
  );
};

export default Home;
