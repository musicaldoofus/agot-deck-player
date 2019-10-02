import React from 'react';
import './CharacterArea.css';

const CharacterArea = (props) => {
    return (
        <div className="character-area">
            <div className="border" id={`Characters(${props.cards.length})`}></div>
        </div>
    );
}

export default CharacterArea;