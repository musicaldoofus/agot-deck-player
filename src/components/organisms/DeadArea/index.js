import React, { useState } from 'react';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';
import './DeadArea.css';

const DeadArea = (props) => {
    const cards = props.cards && props.cards.map(card => <Card isLandscape key={card.cardKey} card={card}/>);
    return (
        <div className="dead-area">
            <div className="border" id={`Dead(${cards ? cards.length : 0})`}>
                {cards && cards.length > 0 ? cards : <NoCards/>}
            </div>
        </div>
    );
}

export default DeadArea;