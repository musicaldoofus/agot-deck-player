import React, { useState } from 'react';
import Page from '../../molecules/Page';
import GameBoard from '../../organisms/GameBoard';
import GameSetup from '../../organisms/GameSetup';
import shuffle from '../../../helpers/shuffle';

const Play = () => {
    const handleSelectDeck = (deck) => {
        const isAgenda = (c) => c.type_code === 'agenda';
        const isPlot = (c) => c.type_code === 'plot';
        const factionArea = deck.cards.filter(isAgenda); //check & improve
        const plotArea = deck.cards.filter(isPlot); //check & improve
        const shuffledDrawDeck = shuffle(deck.cards.filter(card => !isAgenda(card) && !isPlot(card)));
        const autoSetupHand = shuffledDrawDeck.slice(0, 6);
        const drawPileArea = shuffledDrawDeck.slice(7);
        const initGameState = {
            phase: 'plot',
            factionArea,
            drawPileArea,
            plotArea,
            hand: autoSetupHand, //extend (user sets to auto-receive setup hand on start of game): settings.autoSetupHand ? autoSetupHand : []
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
        <Page className="play-container">
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
        </Page>
    );
}

export default Play;