import React from 'react';
import { Link } from 'react-router-dom';
import cardCache from '../../../../helpers/cardCache';

const MyRoot = (props) => {
    const deckList = cardCache.get('savelist', null, 'all');
    console.log('decklist', deckList);
    const decks = deckList.map(deck => (
        <Link key={deck.id} to={`${props.match.url}/decks/${deck.id}`} className="my-decks-display-deck">
            {deck.name}
        </Link>
    ));
    return (
        <div className="my-root">
            {decks}
        </div>
    )
}

export default MyRoot;