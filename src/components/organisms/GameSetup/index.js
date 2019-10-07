import React from 'react';
import cardCache from '../../../helpers/cardCache';
import DeckUiCard from '../../molecules/DeckUiCard';

const GameSetup = (props) => {
    const deckList = cardCache.get('decklist', null, 'all');
    const decks = deckList.map(deck => (
        <DeckUiCard
            className="hover-float"
            deck={deck}
            key={deck.id}
            onClick={() => props.handleSelectDeck(deck)}
        />
    ));
    return (
        <div className="game-setup">
            <h1>Select a deck to play.</h1>
            <div className="deck-results-container">
                {decks}
            </div>
        </div>
    )
}

export default GameSetup;