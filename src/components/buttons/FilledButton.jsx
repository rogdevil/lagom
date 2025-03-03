import './index.css';
import React from 'react';

const FilledButton = ({ text, onClick }) => {
  return (
    <a className="filled-button" onClick={onClick}>
      {text}
    </a>
  );
};

export default FilledButton;
