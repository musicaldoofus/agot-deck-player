import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
    const className = 'btn hover-float';
    return props.to ? (
        <Link
            className={className}
            to={props.to}
            id={props.id}
        >
            <div>{props.children ? props.children : <span className="light">{props.title}</span>}</div>
        </Link>
    ) : (
        <button
            className={className}
            id={props.id}
            onClick={props.onClick}
            onPress={props.onPress}
        >
            {props.children ? props.children : <span className="light">{props.title}</span>}
        </button>
    )
}

export default Button;