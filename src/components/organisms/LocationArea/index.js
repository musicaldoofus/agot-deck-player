import React from 'react';
import InPlayArea from '../InPlayArea';
import './LocationArea.css';

const LocationArea = (props) => {
    return (
        <InPlayArea
            area="characterArea"
            {...props}
        />
    );
}

export default LocationArea;