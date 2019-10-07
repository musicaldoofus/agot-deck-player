import React from 'react';
import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import OptionsContainer from '../../organisms/OptionsContainer';
import './CardFocus.css';

const CardFocus = (props) => {
    return (
        <div className="card-focus">
            <Button onClick={props.handleDismiss}>&larr;</Button>
            <div>
                <Card
                    card={props.card}
                />
                <OptionsContainer
                    context={props.context}
                    card={props.card}
                    handleCardMove={props.handleCardMove}
                    handleKneel={props.handleKneel}
                />
            </div>
        </div>
    );
}

export default CardFocus;