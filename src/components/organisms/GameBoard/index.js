import React, { useState } from 'react';
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
import ToggleShowButton from '../../atoms/ToggleShowButton';
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
    /*const advancePhase = () => {
        console.log('advancePhase');
    }*/

    const [isLefthandShowing, setIsLefthandShowing] = useState(true);
    const [isRighthandShowing, setIsRighthandShowing] = useState(true);
    const handleToggle = (dir) => dir === 'left' ? setIsLefthandShowing(!isLefthandShowing) : setIsRighthandShowing(!isRighthandShowing)

    const gameBoardGridStyle = {
        gridTemplateColumns: `${isLefthandShowing ? '20em' : '5em'} auto ${isRighthandShowing ? '34em' : '5em'}`
    }
    return (
        <div className="game-board" style={gameBoardGridStyle}>
            <HUD
                phase={props.gameState.phase}
                tokenState={props.gameState.tokenState}
            />
            <div className={`lefthand-area ${isLefthandShowing ? 'showing' : 'collapsed'}`}>
                <div className="area">
                    <PlotDiscardArea
                        cards={props.gameState.plotDiscardArea}
                        handleCardMove={moveCardTo}
                    />
                    <PlotArea
                        cards={props.gameState.plotArea}
                        handleCardMove={moveCardTo}
                    />
                </div>
                <ToggleShowButton
                    isLeft
                    isShowing={isLefthandShowing}
                    onClick={() => handleToggle('left')}
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
            <div className={`righthand-area ${isRighthandShowing ? 'showing' : 'collapsed'}`}>
                <div className="area">
                    <FactionArea
                        cards={props.gameState.factionArea}
                        handleTokenMove={moveTokenTo}
                    />
                    <DiscardArea
                        cards={props.gameState.discardArea}
                        handleCardMove={moveCardTo}
                    />
                    <DeadArea
                        cards={props.gameState.deadArea}
                        handleCardMove={moveCardTo}
                    />
                </div>
                <ToggleShowButton
                    isShowing={isRighthandShowing}
                    onClick={() => handleToggle('right')}
                />
            </div>
            <div className="play-controls-area">
                <Hand
                    phase={props.gameState.phase ? props.gameState.phase : 'marshal'}
                    cards={props.gameState.hand}
                    handleCardMove={moveCardTo}
                />
                <DrawPileArea
                    cards={props.gameState.drawPileArea}
                    handleDraw={handleDraw}
                />
            </div>
        </div>
    );
}

export default GameBoard;