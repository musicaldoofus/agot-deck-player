import React from 'react';
import './NoCards.css';

const NoCards = ({isLandscape}) => {
    return (
        <div className={`no-cards${isLandscape ? ' landscape' : ''}`}>
            <div id="no-cards-inner-container"></div>
        </div>
    );
}

export default NoCards;