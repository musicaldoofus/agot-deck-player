import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => {
    return (
        <div className="app">
            <header>
                <h1>A Game of Thrones LCG</h1>
                <h2>Deck player</h2>
            </header>
            <section>
                <Link to="/get">Get decks and cards.</Link>
                <Link to="/play">Play the game.</Link>
                <Link to="/my">My decks and cards.</Link>
            </section>
        </div>
    )
}

export default Splash;