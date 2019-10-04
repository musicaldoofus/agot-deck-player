import React, { useState, useEffect, createRef } from 'react';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';
import ContextMenu from '../../molecules/ContextMenu';
import './CharacterArea.css';

const CharacterArea = (props) => {
    const [contextMenuPos, toggleShowContextMenu] = useState(null);

    const setContextMenuPos = (e) => {
        e.preventDefault();
        if (!contextMenuPos) toggleShowContextMenu({x: e.clientX, y: e.clientY});
    }

    const cards = props.cards && props.cards.map(card => (
        <Card
            key={card.cardKey}
            card={card}
            onContextMenu={setContextMenuPos}
        />
    ));
    const colWidth = '10em';
    const gridStyle = {gridTemplateColumns: `repeat(${props.cards.length}, ${colWidth})`};
    return (
        <div className="character-area">
            <div className="border" id={`Characters(${props.cards.length})`} style={gridStyle}>
                {cards.length && cards.length > 0 ? cards : <NoCards/>}
            </div>
            {contextMenuPos && (
                <ContextMenu
                    pos={contextMenuPos}
                    handleClose={() => toggleShowContextMenu(null)}
                    options={[
                        'one'
                    ]}
                />
            )}
        </div>
    );
}

export default CharacterArea;