import React/*, { useState }*/ from 'react';
import Card from '../../atoms/Card';
import './DrawPile.css';

const DrawPile = (props) => {
    return (
        <Card
            className="draw-pile hover-float"
            isBackside
            onClick={() => props.handleDraw()}
        >
        </Card>
    );
}

export default DrawPile;