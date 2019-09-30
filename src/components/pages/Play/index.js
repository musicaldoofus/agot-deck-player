import React, { useState } from 'react';
import GameBoard from '../../organisms/GameBoard';
import GameSetup from '../../organisms/GameSetup';

const Play = (props) => {
    const handleSelectDeck = (deck) => {
        const initGameState = {};
        setGameState(gameState.concat(initGameState));
    }
    const [gameState, setGameState] = useState([]);
    return (
        <div className="play-container">
            {gameState.length > 0 ? (
                <GameBoard
                    gameState={gameState[gameState.length - 1]}
                    handleGameStateUpdate={(newGameState) => setGameState(gameState.concat(newGameState))}
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