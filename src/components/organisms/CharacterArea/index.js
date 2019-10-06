import React from 'react';
import InPlayArea from '../InPlayArea';
import './CharacterArea.css';

const CharacterArea = (props) => {
    return (
        <InPlayArea
            area="characterArea"
            {...props}
        />
    );
}

export default CharacterArea;