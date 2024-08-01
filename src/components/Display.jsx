import React from "react";
import '../styles/Display.css';
import Button from "./Button";

const Display = ({ value, clearAll }) => {
    const handleClear = () => {
        clearAll();
    };

    return (
        <div className="display-wrapper">
            <div className="display">{value}</div>
            <Button value="C" onClick={handleClear} className="clear-button" />
        </div>
    );
}

export default Display;
