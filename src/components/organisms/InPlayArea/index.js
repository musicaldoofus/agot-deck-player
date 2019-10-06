import React, { useState } from 'react';
import Card from '../../atoms/Card';
import ContextMenu from '../../molecules/ContextMenu';
import OptionsContainer from '../OptionsContainer';
import NoCards from '../../atoms/NoCards';

const InPlayArea = (props) => {
    const [contextMenuPos, toggleShowContextMenu] = useState(null);
    const [focusCard, setFocusCard] = useState(null);

    const handleCardMove = (targetArea) => {
        props.handleCardMove(focusCard, props.area, targetArea);
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
                onClick={() => props.handleKneel(card, props.area)}
            />
        </div>
    ));
    const colWidth = '12em';
    const gridStyle = {gridTemplateColumns: `repeat(${props.cards.length}, ${colWidth})`};
    return (
        <div className={`${props.area.replace(/Area/g, '')}-area`}>
            <div className="border" id={`${props.area.slice(0, 1).toUpperCase().concat(props.area.replace(/Area/g, '').slice(1))}s(${props.cards.length})`} style={gridStyle}>
                {cards && cards.length > 0 ? cards : <NoCards/>}
            </div>
            {contextMenuPos && (
                <ContextMenu
                    pos={contextMenuPos}
                    handleClose={() => toggleShowContextMenu(null)}
                >
                    <OptionsContainer
                        card={focusCard}
                        context={props.area.replace(/Area/g, '')}
                        handleCardMove={handleCardMove}
                        handleKneel={() => props.handleKneel(focusCard, props.area)}
                        handleDismiss={() => toggleShowContextMenu(null)}
                    />
                </ContextMenu>
            )}
        </div>
    );
}

export default InPlayArea;