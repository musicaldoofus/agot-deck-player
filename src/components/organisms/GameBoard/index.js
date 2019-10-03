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
import moveCardToHook from '../../../helpers/moveCardToHook';
import './GameBoard.css';

const GameBoard = (props) => {
    const moveCardTo = (card, fromArea, targetArea) => {
        console.log('moveCardTo', card, fromArea, targetArea);
        props.handleGameStateUpdate(moveCardToHook(card, fromArea, targetArea, props.gameState));
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
    const advancePhase = () => {
        console.log('advancePhase');
    }
    return (
        <div className="game-board">
            <HUD
                phase={props.gameState.phase}
                tokenState={props.gameState.tokenState}
            />
            <div className="lefthand-area">
                <PlotDiscardArea
                    cards={props.gameState.plotDiscardArea}
                    handleCardMove={moveCardTo}
                />
                <PlotArea
                    cards={props.gameState.plotArea}
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
            <div style={{gridColumn: '1 / 4'}}>
                <Hand
                    phase={props.gameState.phase ? props.gameState.phase : 'marshal'}
                    cards={props.gameState.hand}
                    handleCardMove={moveCardTo}
                />
            </div>
        </div>
    );
}

export default GameBoard;