import React, { useState } from 'react';
import CardImg from '../../atoms/CardImg';
import Card from '../../atoms/Card';
import CardFocus from '../../molecules/CardFocus'
import './Hand.css';

const HandInner = (props) => {
    const [modalFocusedCard, setisModalFocused] = useState(false);
    
    const handleCardMove = (targetArea) => {
        const fromTarget = 'hand';
        setisModalFocused(false);
        props.handleCardMove(modalFocusedCard, fromTarget, targetArea);
        props.handleModalDismiss();
    }
    const cards = props.cards.map(card => (
        <Card
            key={card.cardKey}
            card={card}
            onClick={() => setisModalFocused(card)}
        />
    ));
    return !modalFocusedCard ? cards : (
            <CardFocus
                handleCardMove={handleCardMove}
                phase={props.phase}
                card={modalFocusedCard}
                context="hand"
                handleDismiss={() => setisModalFocused(null)}
            />
        );
}

const Hand = (props) => {
    const handInner = (
        <HandInner
            cards={props.cards}
            phase={props.phase}
            handleCardMove={props.handleCardMove}
            handleModalDismiss={() => props.handleModalToggle(null)}
        />
    )
    return (
        <div className="hand hover-float" onClick={() => props.handleModalToggle(handInner)}>
            {[1, 2, 3].map(i => <CardImg key={i} isBackside/>)}
        </div>
    );
}

export default Hand;