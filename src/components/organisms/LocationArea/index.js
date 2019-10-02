import React from 'react';
import './LocationArea.css';

const LocationArea = (props) => {
    return (
        <div className="location-area">
            <div className="border" id={`Locations(${props.cards.length})`}></div>
        </div>
    )
}

export default LocationArea;