import React from 'react';
import './HUD.css';

/*
ideas to extend:
- Allow a user-set modifier. E.g., if a plot card lowers your gold value, user can set -1 modifier in HUD
*/

const HUD = (props) => {
    /*
    const updateModifier(type, amt) => {
        ...
    }
    */
    return (
        <div className="plot-hud-display-container">
            <div className="plot-hud-gold">
                {props.tokenState.gold}
            </div>
            <div className="plot-hud-initiative">
                {props.tokenState.gold ? props.gameState.tokenState.gold : '-'}
            </div>
            <div className="plot-hud-claim">
                {props.tokenState.claim ? props.gameState.tokenState.claim : '-'}
            </div>
        </div>
    );
}

export default HUD;