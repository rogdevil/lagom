import './index.css';
import React from 'react';

const OutlinedButton = ({ text, onClick }) => {
  return (
    <a className="outlined-button" onClick={onClick}>
      {text}
    </a>
  );
};

export default OutlinedButton;
