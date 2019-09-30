import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="nav-controls-container">
                <div>
                    <Link to="/get">Get decks</Link>
                </div>
                <div>
                    <Link to="/play">Play</Link>
                </div>
                <div>
                    <Link to="/my">My decks</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;