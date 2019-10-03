import React from 'react';
import Card from '../../atoms/Card';

const DiscardArea = (props) => {
    const cards = props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div onClick={props.handleDraw} className="discard-pile">
            {cards}
            <div className="card-btn card-btn-hidden">
                
            </div>
        </div>
    )
}

export default DiscardArea;