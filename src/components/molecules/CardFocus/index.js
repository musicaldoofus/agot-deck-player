import React from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import OptionsContainer from '../../organisms/OptionsContainer';

const CardFocus = (props) => {
    return (
        <div className="card-focus">
            <Button onClick={props.handleDismiss}>&larr;</Button>
            <Card
                card={props.card}
            />
            <OptionsContainer
                card={props.card}
                handleCardMove={props.handleCardMove}
                handleKneel={props.handleKneel}
            />
        </div>
    );
}

export default CardFocus;