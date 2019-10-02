import React, { useState } from 'react';
import Card from '../../atoms/Card';
import Button from '../../atoms/Button';
import shuffle from '../../../helpers/shuffle';

const DrawPile = (props) => {
    const [deck, setDeck] = useState(shuffle(props.cards)); //extend - deck will already be shuffled if setting is true: settings.autoSetupHand ? props.cards : shuffle(props.cards)
    const [isMenuOpen, toggleMenu] = useState(false);
    return (
        <Card
            isBackside
            onClick={() => toggleMenu(true)}
        >
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
        </Card>
    )
}

export default DrawPile;