import React from 'react';
import HUD from '../HUD';
import FactionArea from '../FactionArea';
import CharacterArea from '../CharacterArea';
import LocationArea from '../LocationArea';
import PlotArea from '../PlotArea';
import PlotDiscardArea from '../PlotDiscardArea';
import DrawPileArea from '../DrawPileArea';
import DiscardArea from '../DiscardArea';
import DeadArea from '../DeadArea';
import Hand from '../Hand';
import './GameBoard.css';

const GameBoard = (props) => {
    const moveCardTo = (card, targetArea) => {
        console.log('moveCardTo', card, targetArea);
        const updatedGameState = Object.assign({}, {});
        props.handleGameStateUpdate(updatedGameState);
    }
    const moveTokenTo = (card, token, fromSource) => {
        console.log('moveTokenTo', card, token, fromSource);
    }
    const kneelToggle = (card) => {
        console.log('kneelToggle', card);
    }
    const handleDraw = (amt = 1) => {
        console.log('handleDraw', amt);
    }
    return (
        <div className="game-board">
            <HUD
                tokenState={props.gameState.tokenState}
            />
            <div className="area lefthand-area">
                <PlotArea
                    cards={props.gameState.plotArea}
                    handleCardMove={moveCardTo}
                />
                <PlotDiscardArea
                    cards={props.gameState.plotDiscardArea}
                    handleCardMove={moveCardTo}
                />
            </div>
            <div className="area in-play-area">
                <CharacterArea
                    cards={props.gameState.characterArea}
                    handleCardMove={moveCardTo}
                    handleTokenMove={moveTokenTo}
                    handleKneel={kneelToggle}
                />
                <LocationArea
                    cards={props.gameState.locationArea}
                    handleCardMove={moveCardTo}
                    handleTokenMove={moveTokenTo}
                    handleKneel={kneelToggle}
                />
            </div>
            <div className="area righthand-area">
                <div>
                    <FactionArea
                        cards={props.gameState.factionArea}
                        handleTokenMove={moveTokenTo}
                    />
                    <DrawPileArea
                        cards={props.gameState.drawPileArea}
                        handleDraw={handleDraw}
                    />
                    <DiscardArea
                        cards={props.gameState.discardArea}
                        handleCardMove={moveCardTo}
                    />
                </div>
                <div>
                    <DeadArea
                        cards={props.gameState.deadArea}
                        handleCardMove={moveCardTo}
                    />
                </div>
            </div>
            <Hand
                cards={props.gameState.hand}
                handleCardMove={moveCardTo}
            />
        </div>
    )
}

export default GameBoard;