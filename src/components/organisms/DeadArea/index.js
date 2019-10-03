import React from 'react';
import Card from '../../atoms/Card';
import './DeadArea.css';

const DeadArea = (props) => {
    const cards = props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="dead-area">
            {cards}
        </div>
    );
}

export default DeadArea;