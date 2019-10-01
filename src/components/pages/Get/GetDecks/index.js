import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../atoms/Loading';
import cardCache from '../../../../helpers/cardCache';
import getItem, { getDeckLocal } from '../../../../helpers/getItems';
import Button from '../../../atoms/Button';

const GetDecks = (props) => {
    const [deck, setDeck] = useState(getDeckLocal(props.match.params.id));

    //may remove this hook if deck can be set to a promise resolve() value above
    useEffect(() => {
        if (!deck) {
            getItem('deck', props.match.params.id)
                .then(deckObj => {
                    cardCache.add('decklist', props.match.params.id, deckObj);
                    setDeck(deckObj);
                })
                .catch(err => {
                    console.info('err @ getDeck');
                    console.error(err);
                });
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
                <Button to="/get">&larr;</Button>
            </div>
            <div className="get-decks-display">
                {display}
            </div>
        </div>
    );
}

export default GetDecks;