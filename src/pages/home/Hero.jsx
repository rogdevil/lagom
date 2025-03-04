import FilledButton from '../../components/buttons/FilledButton';
import './hero.css';
import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [size, setSize] = useState('0.8');
  const sizeRef = useRef('0.8');
  const MAX = 100;

  const handleScroll = () => {
    const appWrapper = document.getElementById('app-wrapper');
    if (appWrapper.scrollTop <= MAX) {
      sizeRef.current = appWrapper.scrollTop / MAX;
    } else {
      sizeRef.current = 1;
    }
    setSize(sizeRef.current * 0.2 + 0.8);
  };

  useEffect(() => {
    const appWrapper = document.getElementById('app-wrapper');

    appWrapper.addEventListener('scroll', handleScroll);
    return () => appWrapper.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="bg-wrapper-r">
          <div className="bg-top"></div>
          <div className="bg-bottom"></div>
          <div className="bg-noise">
            <div
              style={{
                position: 'absolute',
                borderRadius: 'inherit',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'left top',
                backgroundSize: '128.00px auto',
                backgroundImage:
                  'url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png)',
                border: 0,
              }}
              data-framer-background-image-wrapper="true"
            ></div>
          </div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-chip">
          <p>The Internet of Value</p>
        </div>
        <h1 className="heading fade-in">Lagom</h1>
        <p className="description">
          “Everything will be tokenized and connected by a blockchain one day” <br />
        </p>
        <p>Fred Ehrsam (Co-founder, Coinbase)</p>

        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <FilledButton text={'Contact Us'} />
        </div>

        <div className="hero-img fade-in" style={{ transform: `scale(${size})` }}>
          <div className="hero-img-gradient"></div>
          <div className="hero-img-wrapper">
            <img src="/hero-img.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
