import FilledButton from '../../components/buttons/FilledButton';
import './section3.css';
import React from 'react';

const SectionThree = () => {
  return (
    <div className="section3-wrapper">
      <div className="hero-chip">
        <p>Perks</p>
      </div>
      <p className="heading-2">Why should you tokenize</p>
      <p className="description">
        For a fragmented, illiquid industry, Tokenization offers the opportunity for a business to
        enjoy
      </p>
      <div className="card-wrapper">
        <div className="card">
          <p className="bold-text">Global Reach</p>
        </div>
        <div className="card">
          <p className="bold-text">Enhanced Liquidity</p>
        </div>
        <div className="card">
          <p className="bold-text">Simplified Access</p>
        </div>
        <div className="card">
          <p className="bold-text">New Revenue Stream</p>
        </div>
        <div className="card">
          <p className="bold-text">Defined Ownership</p>
        </div>
      </div>
      <div className="btn-container">
        <FilledButton text={'Tokenize'} />
      </div>
      <div className="feature-wrapper">
        <div className="hero-chip">
          <p>Features</p>
        </div>
        <p className="heading-2">Lagom Chain</p>
        <p className="description">
          EVM-compatible, Cosmos-based Layer 1 blockchain designed to seamlessly bridge Web2
          companies into the Web3 ecosystem.
        </p>
        <div className="card-wrapper">
          <div className="card">
            <p className="bold-text">Quantum proof Coming Soon</p>
          </div>
          <div className="card">
            <p className="bold-text">Purpose-Built Only For RWAs</p>
          </div>
          <div className="card">
            <p className="bold-text">Flexible Built to adopt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
