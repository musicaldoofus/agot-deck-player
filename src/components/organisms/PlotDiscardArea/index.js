import React from 'react';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';

const PlotDiscardArea = (props) => {
    const cards = props.cards && props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="area plot-discard-area">
            <div className="border" id={`Plot-Discard(${props.cards.length})`}>
                {cards.length > 0 ? cards : <NoCards isLandscape/>}
            </div>
        </div>
    )
}

export default PlotDiscardArea;