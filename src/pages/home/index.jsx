import Hero from './Hero';
import './index.css';
import React from 'react';
import SectionOne from './section1';
import SectionTwo from './section2';
import SectionThree from './section3';
import SectionFour from './section4';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default Home;
