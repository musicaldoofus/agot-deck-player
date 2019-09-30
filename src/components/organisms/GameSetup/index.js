import React from 'react';
import cardCache from '../../../helpers/cardCache';

const GameSetup = (props) => {
    const deckList = cardCache.get('decklist', null, 'all');
    const decks = deckList.map(deck => (
        <div key={deck.id} className="game-setup-deck" onClick={() => props.handleSelectDeck(deck)}>
            <div>{deck.name}</div>
        </div>
    ));
    return (
        <div className="game-setup">
            <h1>Select a deck to play.</h1>
            <div className="game-setup-recent-decks">
                {decks}
            </div>
        </div>
    )
}

export default GameSetup;