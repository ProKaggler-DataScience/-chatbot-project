import React from 'react';
import './Popups.css'; // Assuming you have a CSS file for styling popups

const Popups = ({ message, isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="popup-message">{message}</div>
            </div>
        </div>
    );
};

export default Popups;