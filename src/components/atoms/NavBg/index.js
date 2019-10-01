import React, { Fragment } from 'react'
import './NavBg.css';

const NavBg = () => {
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default NavBg;