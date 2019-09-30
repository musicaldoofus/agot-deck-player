import React from 'react';
import cardCache from '../../../helpers/cardCache';

const GameSetup = (props) => {
    const decks = cardCache.get('decklist', null, 'all');
    return (
        <div className="game-setup">
            <div className="game-setup-recent-decks">
                {decks}
            </div>
        </div>
    )
}

export default GameSetup;