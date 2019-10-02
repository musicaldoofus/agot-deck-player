import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../../molecules/Page';
import DeckUiCard from '../../../molecules/DeckUiCard';
import cardCache from '../../../../helpers/cardCache';

const MyRoot = (props) => {
    const deckList = cardCache.get('savelist', null, 'all');
    const decks = deckList.map(deck => (
        <Link key={deck.id} to={`${props.match.url}/decks/${deck.id}`}>
            <DeckUiCard
                deck={deck}
            />
        </Link>
    ));
    return (
        <Page className="my-root">
            <header>
                <h1>My decks and cards</h1>
            </header>
            <div className="deck-results-container">
                {decks}
            </div>
        </Page>
    )
}

export default MyRoot;