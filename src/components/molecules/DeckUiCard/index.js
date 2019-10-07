import React from 'react';
import UiCard from '../../atoms/UiCard';
import './DeckUiCard.css';
import factionCardImages from '../../../helpers/factionCardImages';

const DeckUiCard = (props) => {
    const { name, description_md } = props.deck;
    const className = 'deck-ui-card-container'.concat(props.className ? ' '.concat(props.className) : '');
    return (
        <UiCard
            className={className}
            onClick={props.onClick}
        >
            <div className="deck-ui-card-header-left">
                <img src={factionCardImages[props.deck.faction_code]} alt=""/>
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