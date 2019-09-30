import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <div>
                <Link to="/get">Get decks</Link>
            </div>
            <div>
                <Link to="/play">Play</Link>
            </div>
            <div>
                <Link to="/my">My decks</Link>
            </div>
        </nav>
    )
}

export default Nav;