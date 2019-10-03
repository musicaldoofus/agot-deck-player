import React from 'react';
import Button from '../Button';
import './ToggleShowButton.css';

const ToggleShowButton = (props) => {
    const leftArrow = '\u2190';
    const rightArrow = '\u2192';
    const displayArrow = ((props.isLeft && props.isShowing) || (!props.isLeft && !props.isShowing)) ? leftArrow : rightArrow;
    const posStyle = props.isLeft ? { right: 0 } : { left: 0 };
    return (
        <Button
            className={`toggle-show-button ${props.isShowing ? 'showing' : 'collapsed'}`}
            onClick={props.onClick}
            style={posStyle}
        >
            <span>{displayArrow}</span>
        </Button>
    );
}

export default ToggleShowButton;