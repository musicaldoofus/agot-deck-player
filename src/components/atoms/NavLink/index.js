import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = (props) => {
    const formatLabel = (l) => {
        const lbl = props.to.replace(/(\/|\.)/g, '');
        return lbl.slice(0,1).toUpperCase().concat(lbl.slice(1));
    }
    const linkLabel = props.label ? props.label : formatLabel(props.to);
    return (
        <div className="nav-btn-container hover-float">
            <Link className="nav-btn" to={props.to}>
                <div className="light">{linkLabel}</div>
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