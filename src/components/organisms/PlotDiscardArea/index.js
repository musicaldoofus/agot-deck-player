import React from 'react';
import Card from '../../atoms/Card';

const PlotDiscardArea = (props) => {
    const cards = props.cards && props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="area plot-discard-area">
            {cards}
        </div>
    )
}

export default PlotDiscardArea;