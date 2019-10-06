import React/*, { useState }*/ from 'react';
import Button from '../../atoms/Button';
import './HUD.css';

/*
ideas to extend:
- Allow a user-set modifier. E.g., if a plot card lowers your gold value, user can set -1 modifier in HUD
- may need to hoist these values to GameBoard
*/

const HUD = (props) => {
    return (
        <div className="hud-display-container">
            <div className="hud-tokens-container">
                <div className="hud-gold">
                    {props.tokenState.gold}
                </div>
                <div className="hud-initiative">
                    {props.tokenState.initiative ? props.tokenState.initiative : '-'}
                </div>
                <div className="hud-claim">
                    {props.tokenState.claim ? props.tokenState.claim : '-'}
                </div>
            </div>
            <div className="hud-phase-container">
                <div>{props.phase}</div>
            </div>
            <div className="hud-admin-controls">
                <Button
                    title="Revert"
                    onClick={props.handleRevert}
                />
            </div>
        </div>
    );
}

export default HUD;