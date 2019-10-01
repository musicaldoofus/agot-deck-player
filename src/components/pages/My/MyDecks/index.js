import React from 'react';
import Button from '../../../atoms/Button';
import cardCache from '../../../../helpers/cardCache';

const MyDecks = (props) => {
    const deck = cardCache.get('decklist', props.match.params.id);
    const display = !deck ? (
        <div>
            <h1>Deck not found.</h1>
        </div>
    ) : (
        <header>
            {deck.name}
        </header>
    );
    return (
        <div className="my-decks">
            <div className="back-button-container">
                <Button to="/my">&larr;</Button>
            </div>
            <div className="deck-display-single">
                {display}
            </div>
        </div>
    );
}

export default MyDecks;