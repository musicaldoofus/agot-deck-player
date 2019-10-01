import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
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
            <div className="nav-bg-screen"></div>
            <div className="nav-bg-container">
                <div className="nav-bg-row">
                    <div className="nav-bg-col corner-left-top"></div>
                    <div className="nav-bg-col side-top"></div>
                    <div className="nav-bg-col corner-right-top"></div>
                </div>
                <div className="nav-bg-row">
                    <div className="nav-bg-col side-left"></div>
                    <div className="nav-bg-col center"></div>
                    <div className="nav-bg-col side-right"></div>
                </div>
                <div className="nav-bg-row">
                    <div className="nav-bg-col corner-left-bottom"></div>
                    <div className="nav-bg-col side-bottom"></div>
                    <div className="nav-bg-col corner-right-bottom"></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;