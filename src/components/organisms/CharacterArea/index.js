import React, { useState } from 'react';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';
import ContextMenu from '../../molecules/ContextMenu';
import OptionsContainer from '../../organisms/OptionsContainer';
import './CharacterArea.css';

const CharacterArea = (props) => {
    const [contextMenuPos, toggleShowContextMenu] = useState(null);
    const [focusCard, setFocusCard] = useState(null);

    const handleCardMove = (targetArea) => {
        const fromTarget = 'characterArea';
        props.handleCardMove(focusCard, fromTarget, targetArea);
        setFocusCard(null);
    }

    const setContextMenuPos = (e, card) => {
        e.preventDefault();
        if (!contextMenuPos) {
            toggleShowContextMenu({x: e.clientX, y: e.clientY});
            setFocusCard(card);
        }
    }
    const cards = props.cards && props.cards.map(card => (
        <div className="card-inplay-slot">
            <Card
                key={card.cardKey}
                card={card}
                onContextMenu={(e) => setContextMenuPos(e, card)}
                onClick={() => props.handleKneel(card, 'characterArea')}
            />
        </div>
    ));
    const colWidth = '12em';
    const gridStyle = {gridTemplateColumns: `repeat(${props.cards.length}, ${colWidth})`};
    return (
        <div className="character-area">
            <div className="border" id={`Characters(${props.cards.length})`} style={gridStyle}>
                {cards && cards.length > 0 ? cards : <NoCards/>}
            </div>
            {contextMenuPos && (
                <ContextMenu
                    pos={contextMenuPos}
                    handleClose={() => toggleShowContextMenu(null)}
                >
                    <OptionsContainer
                        card={focusCard}
                        context="character"
                        handleCardMove={handleCardMove}
                        handleKneel={() => props.handleKneel(focusCard, 'characterArea')}
                        handleDismiss={() => toggleShowContextMenu(null)}
                    />
                </ContextMenu>
            )}
        </div>
    );
}

export default CharacterArea;