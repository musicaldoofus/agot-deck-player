import React from 'react';
import './UiCard.css';

const UiCard = (props) => {
    const baseClassName = 'ui-card hover-float';
    const className = props.className ? baseClassName.concat(' ').concat(props.className) : baseClassName;
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