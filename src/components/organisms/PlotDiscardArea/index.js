import React from 'react';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';
import './PlotDiscardArea.css';

const PlotDiscardArea = (props) => {
    const display = props.cards && props.cards.length > 0 ? (
        <Card
            card={props.cards[props.cards.length - 1]}
            className="plot"
        />
    ) : <NoCards/>
    return (
        <div className="plot-discard-area">
            <div className="border" id={`Plot-Discard(${props.cards.length})`}>
                {display}
            </div>
        </div>
    );
}

export default PlotDiscardArea;