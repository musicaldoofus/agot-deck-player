import React from 'react';
import UiCard from '../../atoms/UiCard';
import './DeckUiCard.css';

const DeckUiCard = (props) => {
    const { name, description_md } = props.deck;
    return (
        <UiCard
            className="deck-ui-card-container"
            onClick={props.onClick}
        >
            <div className="deck-ui-card-header-left">
                <div className={props.deck.faction_code} alt={`${props.deck.faction_code} faction image`}></div>
            </div>
            <div className="deck-ui-card-metadata">
                <div className="deck-ui-card-title">
                    <h3>{name}</h3>
                </div>
                <div className="deck-ui-card-description">
                        <p>{description_md}</p>
                </div>
            </div>
        </UiCard>
    );
}

export default DeckUiCard;