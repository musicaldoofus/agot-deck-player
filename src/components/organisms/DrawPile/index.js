import React, { useState } from 'react';
import Button from '../../atoms/Button';

const DrawPile = (props) => {
    const shuffle = (arr) => {
        return arr;
    }
    const [deck, setDeck] = useState(shuffle(props.cards));
    const [isMenuOpen, toggleMenu] = useState(false);
    return (
        <div onClick={() => toggleMenu(true)} className="draw-pile">
            {isMenuOpen && (
                <div className="draw-pile-menu-options">
                    <Button
                        title="Draw a card"
                        onClick={props.handleDraw}
                    />
                    <Button
                        title="Shuffle deck"
                        onClick={() => setDeck(shuffle(deck))}
                    />
                </div>
            )}
            <div className="card-btn card-btn-backside">

            </div>
        </div>
    )
}

export default DrawPile;