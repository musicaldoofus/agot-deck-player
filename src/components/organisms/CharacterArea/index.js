import React from 'react';
import Card from '../../atoms/Card';
import './CharacterArea.css';

const CharacterArea = (props) => {
    const cards = props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="character-area">
            <div className="border" id={`Characters(${props.cards.length})`}>
                {cards}
            </div>
        </div>
    );
}

export default CharacterArea;