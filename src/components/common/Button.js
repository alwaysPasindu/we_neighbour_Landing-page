import React from 'react';
import '../../styles/components/Button.css';

const Button = ({ children, className, onClick, type = 'button', variant = 'primary' }) => {
  return (
    <button
      type={type}
      className={`btn-${variant} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
