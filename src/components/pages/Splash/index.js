import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import './Splash.css';

const Splash = (props) => {
    return (
        <div>
            <header>
                <h1>A Game of Thrones LCG</h1>
                <h2>Deck player</h2>
            </header>
            <section>
                <Button to="/get">Get decks and cards.</Button>
                <Button to="/play">Play the game.</Button>
                <Button to="/my">My decks and cards.</Button>
            </section>
        </div>
    );
}

export default Splash;