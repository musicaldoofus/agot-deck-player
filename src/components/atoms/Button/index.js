import React from 'react';
import './Button.css';

const Button = (props) => {
    //const className = 'hover-float'.concat(props.className ? ' '.concat(props.className) : ''); <-- for extension - may not use
    return (
        <button
            className="hover-float"
            id={props.id}
            onClick={props.onClick}
            onPress={props.onPress}
        >
            {props.children ? props.children : <span className="light">{props.title}</span>}
        </button>
    )
}

export default Button;