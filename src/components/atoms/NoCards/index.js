import React from 'react';
import './NoCards.css';

const NoCards = ({isLandscape}) => {
    return (
        <div className={`no-cards-${isLandscape ? 'landscape' : 'portrait'}`}></div>
    );
}

export default NoCards;