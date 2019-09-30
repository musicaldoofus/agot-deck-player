import React, { useState } from 'react';
import GameBoard from '../../organisms/GameBoard';
import GameSetup from '../../organisms/GameSetup';

const Play = (props) => {
    const initGameState = {};
    const [deck, setDeck] = useState(null);
    const [gameState, setGameState] = useState(initGameState);
    return (
        <div className="play-container">
            {deck ? (
                <GameBoard
                    gameState={gameState[gameState.length - 1]}
                    handleGameStateUpdate={(newGameState) => setGameState(gameState.concat(newGameState))}
                />
            ) : (
                <GameSetup
                    handleSelectDeck={setDeck}
                />
            )}
        </div>
    )
}

export default Play;