import React from 'react';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';

const PlotArea = (props) => {
    const cards = props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="plot-area">
            <div className="border" id={`Plot(${props.cards.length})`}>
                {props.cards.length > 0 ? (
                    <Card
                        isBackside
                        isLandscape
                        onClick={() => props.handleModalToggle(cards)}
                    />
                ) : (
                    <NoCards isLandscape/>
                )}
            </div>
        </div>
    );
}

export default PlotArea;