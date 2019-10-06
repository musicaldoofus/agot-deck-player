import React from 'react';
import InPlayArea from '../InPlayArea';
import './LocationArea.css';

const LocationArea = (props) => {
    return (
        <InPlayArea
            area="locationArea"
            {...props}
        />
    );
}

export default LocationArea;