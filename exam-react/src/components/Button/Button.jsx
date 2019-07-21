import React from 'react';
import './button.css';

const Button = ({ getData }) => (
  <div className="button">
    <button onClick={getData}>get user!</button>
  </div>
);

export default Button;
