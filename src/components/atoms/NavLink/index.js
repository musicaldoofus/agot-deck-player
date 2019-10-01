import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = (props) => {
    const toLabel = props.to.replace(/\//g, '');
    const labelText = toLabel.slice(0,1).toUpperCase().concat(toLabel.slice(1));
    return (
        <div className="nav-btn-container hover-float">
            <Link className="nav-btn" to={props.to}>
                <div className="light">{labelText}</div>
            </Link>
            <div className="nav-bg-screen"></div>
            <div className="nav-btn-bg">
                <div className="side-left"></div>
                <div className="center"></div>
                <div className="side-right"></div>
            </div>
        </div>
    );
}

export default NavLink;