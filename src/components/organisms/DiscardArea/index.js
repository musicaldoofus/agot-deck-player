import React, { Fragment, useState } from 'react';
import NoCards from '../../atoms/NoCards';
import Card from '../../atoms/Card';
import CardFocus from '../../molecules/CardFocus';
import Modal from '../../molecules/Modal';
import './DiscardPile.css';

const DiscardArea = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [modalFocusedCard, setisModalFocused] = useState(false);
    
    const toggleShowModal = () => setShowModal(!showModal);
    const toggleModalFocus = (card) => setisModalFocused(card);

    const displayCards = props.cards && props.cards.length ? props.cards.reverse().map(card => ( //reverse() because each new addition is added to end of list
        <Card
            card={card}
            onClick={() => toggleShowModal(card)}
        />
    )) : [<NoCards/>];
    const display =  displayCards[0];
    return (
        <Fragment>
            <div onClick={props.handleDraw} className="discard-pile">
                <div className="border" id={`Discard(${props.cards ? props.cards.length : 0})`}>
                    {display}
                </div>
            </div>
            {showModal && (
                <Modal
                    handleClose={toggleShowModal}
                >
                    {!modalFocusedCard ? (
                        props.cards.map(card => (
                            <Card
                                card={card}
                                onClick={toggleShowModal}
                            />
                        ))
                    ) : (
                        <CardFocus
                            phase={props.phase}
                            card={modalFocusedCard}
                            context="discard"
                            handleDismiss={() => toggleModalFocus(null)}
                        />
                    )}
                </Modal>
            )}
        </Fragment>
    );
}

export default DiscardArea;