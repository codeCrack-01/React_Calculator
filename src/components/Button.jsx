// Button.js
import React from 'react';
import '../styles/Button.css';

const Button = ({ value, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

export default Button;
