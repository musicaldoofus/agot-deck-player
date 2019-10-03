import React from 'react';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';
import './LocationArea.css';

const LocationArea = (props) => {
    const cards = props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="location-area">
            <div className="border" id={`Locations(${props.cards.length})`}>
                {cards.length && cards.length > 0 ? cards : <NoCards/>}
            </div>
        </div>
    );
}

export default LocationArea;