import React/*, { useState }*/ from 'react';
import Button from '../../atoms/Button';
import './HUD.css';

/*
ideas to extend:
- Allow a user-set modifier. E.g., if a plot card lowers your gold value, user can set -1 modifier in HUD
*/

const HUD = (props) => {
    /*
    const [goldMod, setGoldMod] = useState(0);
    const [initMod, setInitMod] = useState(0);
    const [claimMod, setClaimMod] = useState(0);
    const updateModifier(type, amt) => {
        ...
    }
    */
    return (
        <div className="plot-hud-display-container">
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