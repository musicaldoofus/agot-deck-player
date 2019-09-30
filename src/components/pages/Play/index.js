import React, { useState } from 'react';
import GameBoard from '../../organisms/GameBoard';
import GameSetup from '../../organisms/GameSetup';

const Play = () => {
    const handleSelectDeck = (deck) => {
        console.log('handleSelectDeck', deck);
        //wrap below - need a Promise so this can be a callback once all cards are loaded from deck.slots
        const isFaction = (c) => c.type === 'agenda' || c.type === 'faction';
        const isPlot = (c) => c.type === 'plot';
        const factionArea = deck.slots.filter(isFaction); //check & improve
        const plotArea = deck.slots.filter(isPlot); //check & improve
        const drawPileArea = deck.filter(card => !isFaction(card) && !isPlot(card));
        const initGameState = {
            factionArea,
            drawPileArea,
            plotArea,
            hand: [],
            characterArea: [],
            locationArea: [],
            plotDiscardArea: [],
            discardPileArea: []
        };
        setGameState(gameState.concat(initGameState));
    }

    const handleGameStateUpdate = (newGameState) => {
        console.log('handleGameStateUpdate', newGameState);
        setGameState(gameState.concat(newGameState));
    }
    const [gameState, setGameState] = useState([]); //extend: allow continue game option (use a getter instead of empty array)
    return (
        <div className="play-container">
            {gameState.length > 0 ? (
                <GameBoard
                    gameState={gameState[gameState.length - 1]}
                    handleGameStateUpdate={handleGameStateUpdate}
                />
            ) : (
                <GameSetup
                    handleSelectDeck={handleSelectDeck}
                />
            )}
        </div>
    )
}

export default Play;