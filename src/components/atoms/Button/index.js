import React from 'react';

const Button = (props) => {
    return (
        <button
            id={props.id}
            onClick={props.onClick}
            onPress={props.onPress}
        >
            {props.children ? props.children : props.title}
        </button>
    )
}

export default Button;