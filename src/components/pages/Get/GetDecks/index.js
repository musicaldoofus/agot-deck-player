import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../atoms/Loading';
import cardCache from '../../../../helpers/cardCache';
import { getFromAPI } from '../../../../helpers/getFromAPI';
import Button from '../../../atoms/Button';

const GetDecks = (props) => {
    const [deck, setDeck] = useState(cardCache.get('decklist', props.match.params.id));

    useEffect(() => {
        if (!deck) {
            getFromAPI({
                type: 'decklist',
                id: props.match.params.id
            })
            .then(deckObj => {
                const parsedDeckObj = JSON.parse(deckObj);
                cardCache.add('decklist', props.match.params.id, parsedDeckObj);
                setDeck(parsedDeckObj);
            })
            .catch(err => console.error(err));
        }
    })

    const display = deck ? (
        <Fragment>
            <header>
                <h1>{deck.name}</h1>
            </header>
            <div className="get-deck-controls">
                <Button
                    title="Save"
                    onClick={() => cardCache.save(deck.id, 'decklist')}
                />
            </div>
            <div className="get-deck-metadata">

            </div>
            <div className="get-deck-cardlist">
                <div className="get-deck-cardlist-viewcontrols">

                </div>
            </div>
        </Fragment>
    ) : (
        <Loading/>
    );
    return (
        <div className="get-decks">
            <div className="get-decks-title">
                <Link to="/get">&larr;</Link>
            </div>
            <div className="get-decks-display">
                {display}
            </div>
        </div>
    );
}

export default GetDecks;