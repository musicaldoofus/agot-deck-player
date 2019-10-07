import React, { useState } from 'react';
import CardFocus from '../../molecules/CardFocus';
import Card from '../../atoms/Card';

const InnerModal = (props) => {
    const [modalFocusedCard, setisModalFocused] = useState(false);
    
    const toggleModalFocus = (card) => setisModalFocused(card);

    const handleCardMove = (targetArea) => {
        props.handleCardMove(modalFocusedCard, props.context, targetArea);
        props.handleModalDismiss();
    }

    return !modalFocusedCard ? (
        props.cards.map(card => (
            <Card
                key={card.cardKey}
                card={card}
                onClick={() => toggleModalFocus(card)}
            />
        ))
    ) : (
        <CardFocus
            phase={props.phase}
            card={modalFocusedCard}
            context={props.context}
            handleCardMove={handleCardMove}
            handleDismiss={() => toggleModalFocus(null)}
        />
    );
}

export default InnerModal;