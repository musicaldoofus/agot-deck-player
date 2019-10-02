import React from 'react';
import Page from '../../../molecules/Page';
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
        <Page className="my-decks">
            <div className="back-button-container">
                <Button to="/my">&larr;</Button>
            </div>
            <div className="deck-display-single">
                {display}
            </div>
        </Page>
    );
}

export default MyDecks;