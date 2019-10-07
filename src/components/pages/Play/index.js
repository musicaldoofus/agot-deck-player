import React, { useState } from 'react';
import Page from '../../molecules/Page';
import GameBoard from '../../organisms/GameBoard';
import GameSetup from '../../organisms/GameSetup';
import shuffle from '../../../helpers/shuffle';
import getNewGameState from '../../../helpers/getNewGameState';
import baratheon from '../../../media/factions/baratheon-faction.jpg';
import greyjoy from '../../../media/factions/greyjoy-faction.jpg';
import lannister from '../../../media/factions/lannister-faction.jpg';
import martell from '../../../media/factions/martell-faction.jpg';
import thenightswatch from '../../../media/factions/nights-watch-faction.jpg';
import stark from '../../../media/factions/stark-faction.jpg';
import targaryen from '../../../media/factions/targaryen-faction.jpg';
import tyrell from '../../../media/factions/tyrell-faction.jpg';

const factions = {
    baratheon,
    greyjoy,
    lannister,
    martell,
    thenightswatch,
    stark,
    targaryen,
    tyrell
};

const Play = () => {
    const [gameStates, setGameState] = useState([]); //extend: allow continue game option (use a getter instead of empty array)
    
    const gameStateTemplate = {
        phase: 'plot',
        drawPileArea: [],
        plotArea: [],
        hand: [],
        characterArea: [],
        locationArea: [],
        plotDiscardArea: [],
        discardArea: [],
        deadArea: [],
        tokenState: {
            gold: 0,
            initiative: null,
            claim: null
        }
    }
    const handleSelectDeck = (deck) => {
        const isAgenda = (c) => c.type_code === 'agenda';
        const isPlot = (c) => c.type_code === 'plot';
        const factionCard = {
            cardKey: -1, //reserved key from apiHelpers
            //faction_code
            faction_code: deck.faction_code,
            status: 'standing',
            tokenState: {
                gold: 0,
                power: 0
            },
            type_code: 'faction',
            image_url: factions[deck.faction_code]
        };
        const factionArea = deck.cards.filter(isAgenda).concat(factionCard); //check & improve
        const plotArea = deck.cards.filter(isPlot); //check & improve
        const shuffledDrawDeck = shuffle(deck.cards.filter(card => !isAgenda(card) && !isPlot(card)));
        const autoSetupHand = shuffledDrawDeck.slice(0, 7);
        const drawPileArea = shuffledDrawDeck.slice(8);
        const initGameStateProps = {
            factionArea,
            drawPileArea,
            plotArea,
            hand: autoSetupHand //extend (user sets to auto-receive setup hand on start of game): settings.autoSetupHand ? autoSetupHand : []
        };
        const initGameState = Object.assign({}, gameStateTemplate, initGameStateProps);
        setGameState(gameStates.concat(initGameState));
    }
    const getCurrentGameState = () => gameStates[gameStates.length - 1];

    const handleGameStateUpdate = (params) => { //extend - determine which type of game state update needs to take place; add a "commit message" i.e. ${actor} ${verb} ${subject}
        //doesn't work - troubleshoot
        if (params === 'revert') {
            const updatedState = gameStates.length === 1 ? [gameStateTemplate] : gameStates.slice(0, gameStates.length - 1);
            //console.log('new gameState arr should be', updatedState);
            setGameState(updatedState);
        }
        setGameState(gameStates.concat(
            getNewGameState(params, getCurrentGameState())
        ));
    }

    return (
        <Page className="play-container">
            {gameStates.length === 0 ? (
                <GameSetup
                    handleSelectDeck={handleSelectDeck}
                />
            ) : (
                <GameBoard
                    gameState={getCurrentGameState()}
                    handleGameStateUpdate={handleGameStateUpdate}
                />
            )}
        </Page>
    );
}

export default Play;