import React/*, { useState }*/ from 'react';
import Card from '../../atoms/Card';
//import Button from '../../atoms/Button';
//import shuffle from '../../../helpers/shuffle';

const DrawPile = (props) => {
    //const [deck, setDeck] = useState(shuffle(props.cards)); //extend - deck will already be shuffled if setting is true: settings.autoSetupHand ? props.cards : shuffle(props.cards)
    //const [isMenuOpen, toggleMenu] = useState(false);
    return (
        <Card
            isBackside
            onClick={() => props.handleDraw()}
        >
        </Card>
    );
}

export default DrawPile;