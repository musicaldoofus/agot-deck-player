import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <span className="nav-bg nav-bg-left"></span>
            <div className="nav-controls-container">
                <div>
                    <Link className="hover-float" to="/get">
                        <div className="light">Get decks</div>
                    </Link>
                </div>
                <div>
                    <Link className="hover-float" to="/play">
                        <div className="light">Play</div>
                    </Link>
                </div>
                <div>
                    <Link className="hover-float" to="/my">
                        <div className="light">My decks</div>
                    </Link>
                </div>
            </div>
            <span className="nav-bg nav-bg-right"></span>
        </nav>
    )
}

export default Nav;