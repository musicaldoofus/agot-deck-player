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
import Modal from '../../molecules/Modal';
import './GameBoard.css';

const GameBoard = (props) => {
    const [modalChildren, setModalChildren] = useState(null);
    const [isLefthandShowing, setIsLefthandShowing] = useState(true);
    const [isRighthandShowing, setIsRighthandShowing] = useState(true);

    const handleRevertGameState = () => {
        if (props.gameState.length === 0) return;
        props.handleGameStateUpdate('revert');
    }
    const moveCardTo = (card, fromArea, targetArea) => {
        console.log('moveCardTo', fromArea);
        if (/(plot|dead|discard)/gi.test(fromArea)) fromArea = fromArea.concat('Area'); //shitty fix for now
        console.log('moveCardTo', card, fromArea, targetArea);
        props.handleGameStateUpdate({card, fromArea, targetArea});
    }
    const moveTokenTo = (card, token, fromSource) => {
        //console.log('moveTokenTo', card, token, fromSource);
    }
    const kneelToggle = (card, fromArea) => {
        props.handleGameStateUpdate({card, cardStatus: card.status === 'standing' ? 'kneeling' : 'standing', fromArea});
    }
    const handleDraw = (amt = 1) => {
        //console.log('handleDraw', amt);
        props.handleGameStateUpdate({drawAmt: amt});
    }
    /*const advancePhase = () => {
        console.log('advancePhase');
    }*/

    const handleToggle = (dir) => dir === 'left' ? setIsLefthandShowing(!isLefthandShowing) : setIsRighthandShowing(!isRighthandShowing)

    const gameBoardGridStyle = {
        gridTemplateColumns: `${isLefthandShowing ? '20em' : '3em'} auto ${isRighthandShowing ? '22.5em' : '3em'}`
    }
    return (
        <div className="game-board" style={gameBoardGridStyle}>
            <HUD
                phase={props.gameState.phase}
                tokenState={props.gameState.tokenState}
                handleRevert={handleRevertGameState}
            />
            <div className={`lefthand-area ${isLefthandShowing ? 'showing' : 'collapsed'}`}>
                <div className="area">
                    <PlotDiscardArea
                        cards={props.gameState.plotDiscardArea}
                        handleCardMove={moveCardTo}
                        handleModalToggle={setModalChildren}
                    />
                    <PlotArea
                        cards={props.gameState.plotArea}
                        handleCardMove={moveCardTo}
                        handleModalToggle={setModalChildren}
                    />
                </div>
                <ToggleShowButton
                    isLeft
                    isShowing={isLefthandShowing}
                    onClick={() => handleToggle('left')}
                />
            </div>
            <div className="area in-play-area showing">
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
                        handleKneel={kneelToggle}
                    />
                    <DiscardArea
                        cards={props.gameState.discardArea}
                        handleCardMove={moveCardTo}
                        handleModalToggle={setModalChildren}
                    />
                    <DeadArea
                        cards={props.gameState.deadArea}
                        handleCardMove={moveCardTo}
                        handleModalToggle={setModalChildren}
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
                    handleModalToggle={setModalChildren}
                />
                <DrawPileArea
                    cards={props.gameState.drawPileArea}
                    handleDraw={handleDraw}
                />
            </div>
            {modalChildren && (
                <Modal
                    handleClose={() => setModalChildren(null)}
                >
                    {modalChildren}
                </Modal>
            )}
        </div>
    );
}

export default GameBoard;