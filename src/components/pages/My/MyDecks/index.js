import React from 'react';
import { Link } from 'react-router-dom';
import cardCache from '../../../../helpers/cardCache';

const MyDecks = (props) => {
    const deck = cardCache.get('decklist', props.match.params.id);
    return (
        <div className="my-decks">
            <div className="back-button-container">
                <Link to="/my">&larr;</Link>
            </div>
            <header>
                {deck.name}
            </header>
        </div>
    );
}

export default MyDecks;