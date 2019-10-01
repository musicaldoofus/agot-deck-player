import React, { useState } from 'react';
import GameBoard from '../../organisms/GameBoard';
import GameSetup from '../../organisms/GameSetup';

const Play = () => {
    const handleSelectDeck = (deck) => {
        const isFaction = (c) => c.type_code === 'agenda' || c.type === 'faction';
        const isPlot = (c) => c.type_code === 'plot';
        const factionArea = deck.cards.filter(isFaction); //check & improve
        const plotArea = deck.cards.filter(isPlot); //check & improve
        const drawPileArea = deck.cards.filter(card => !isFaction(card) && !isPlot(card));
        const initGameState = {
            factionArea,
            drawPileArea,
            plotArea,
            hand: [],
            characterArea: [],
            locationArea: [],
            plotDiscardArea: [],
            discardPileArea: [],
            deadArea: [],
            tokenState: {
                gold: 0,
                initiative: null,
                claim: null
            }
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
            {gameState.length === 0 ? (
                <GameSetup
                    handleSelectDeck={handleSelectDeck}
                />
            ) : (
                <GameBoard
                    gameState={gameState[gameState.length - 1]}
                    handleGameStateUpdate={handleGameStateUpdate}
                />
            )}
        </div>
    )
}

export default Play;