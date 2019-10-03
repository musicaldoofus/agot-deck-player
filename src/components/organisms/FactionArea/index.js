import React from 'react';
import Card from '../../atoms/Card';

const FactionArea = (props) => {
    const cards = props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="faction-area">
            {cards}
        </div>
    )
}

export default FactionArea;