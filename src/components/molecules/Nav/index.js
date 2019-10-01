import React from 'react';
import NavLink from '../../atoms/NavLink';
import NavBg from '../../atoms/NavBg';
import './Nav.css';

const Nav = () => {
    const links = [{
        to: '/get'
    }, {
        to: '/play'
    }, {
        to: '/my'
    }];
    const navLinks = links.map(l => <NavLink key={l.to} {...l}/>);
    return (
        <nav>
            <div className="nav-controls-container">
                {navLinks}
            </div>
            <NavBg/>
        </nav>
    )
}

export default Nav;