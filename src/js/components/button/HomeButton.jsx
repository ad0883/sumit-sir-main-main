import React from 'react';
import '../../../css/components/HomeButton/HomeButton.css';

const HomeButton = () => {
    return (
        <div className="home-button-container">
            <a href="/#" className="home-button">
                Go to Homepage
            </a>
        </div>
    );
};

export default HomeButton;