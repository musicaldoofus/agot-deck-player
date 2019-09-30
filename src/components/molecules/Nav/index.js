import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <div className="nav-controls-container">
                <div>
                    <Link className="hover-float" to="/get">
                        <div>Get decks</div>
                    </Link>
                </div>
                <div>
                    <Link className="hover-float" to="/play">
                        <div>Play</div>
                    </Link>
                </div>
                <div>
                    <Link className="hover-float" to="/my">
                        <div>My decks</div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;