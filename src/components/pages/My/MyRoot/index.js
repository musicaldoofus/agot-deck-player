import React from 'react';
import { Link } from 'react-router-dom';
import UiCard from '../../../atoms/UiCard';
import cardCache from '../../../../helpers/cardCache';

const MyRoot = (props) => {
    const deckList = cardCache.get('savelist', null, 'all');
    const decks = deckList.map(deck => (
        <Link key={deck.id} to={`${props.match.url}/decks/${deck.id}`}>
            <UiCard className="my-decks-display-deck">
                {deck.name}
            </UiCard>
        </Link>
    ));
    return (
        <div className="my-root">
            <header>
                <h1>My decks and cards</h1>
            </header>
            <div className="my-root-display">
                {decks}
            </div>
        </div>
    )
}

export default MyRoot;