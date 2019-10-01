import React from 'react';
import './UiCard.css';

const UiCard = (props) => {
    const className = props.className ? 'card hover-float '.concat(props.className) : 'card hover-float';
    return (
        <div
            className={className}
            onClick={props.onClick}
            onPress={props.onPress}
        >
            {props.children}
        </div>
    )
}

export default UiCard;