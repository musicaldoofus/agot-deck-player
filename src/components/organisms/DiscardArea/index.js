import React from 'react';
import OutOfPlayArea from '../OutOfPlayArea';
import './DiscardPile.css';

const DiscardArea = (props) => {
    return (
        <OutOfPlayArea
            area="discardArea"
            {...props}
        />
    );
}

export default DiscardArea;