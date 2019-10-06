import React from 'react'
import './FactionIcon.css';

const FactionIcon = (props) => {
    return (
        <span className={`icon icon-${props.faction}`}></span>
    );
}

export default FactionIcon;