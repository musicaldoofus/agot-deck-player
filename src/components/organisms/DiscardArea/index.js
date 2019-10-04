import React from 'react';
import NoCards from '../../atoms/NoCards';
import Card from '../../atoms/Card';
import './DiscardPile.css';

const DiscardArea = (props) => {
    const cards = props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div onClick={props.handleDraw} className="discard-pile">
            <div className="border" id={`Discard(${cards ? cards.length : 0})`}>
                {cards && cards.length > 0 ? cards : <NoCards/>}
            </div>
        </div>
    );
}

export default DiscardArea;