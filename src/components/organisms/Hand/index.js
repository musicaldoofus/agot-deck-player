import React, { Fragment, useState } from 'react';
import CardImg from '../../atoms/CardImg';
import Card from '../../atoms/Card';
import CardFocus from '../../molecules/CardFocus'
import Modal from '../../molecules/Modal';
import './Hand.css';

const Hand = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [modalFocusedCard, setisModalFocused] = useState(false);
    
    const toggleShowModal = () => setShowModal(!showModal);
    const toggleModalFocus = (card) => setisModalFocused(card);

    const handleCardMove = (targetArea) => {
        const fromTarget = 'hand';
        props.handleCardMove(modalFocusedCard, fromTarget, targetArea);
        setisModalFocused(false);
        setShowModal(false);
    }
    const cards = props.cards.map(card => (
        <Card
            key={card.cardKey}
            card={card}
            onClick={() => toggleModalFocus(card)}
        />
    ));
    return (
        <Fragment>
            <div className="hand hover-float" onClick={toggleShowModal}>
                {[1, 2, 3].map(i => <CardImg key={i} isBackside/>)}
            </div>
            {showModal && (
                <Modal
                    handleClose={toggleShowModal}
                >
                    {!modalFocusedCard ? cards : (
                        <CardFocus
                            handleCardMove={handleCardMove}
                            phase={props.phase}
                            card={modalFocusedCard}
                            context="hand"
                            handleDismiss={() => toggleModalFocus(null)}
                        />
                    )}
                </Modal>
            )}
        </Fragment>
    );
}

export default Hand;