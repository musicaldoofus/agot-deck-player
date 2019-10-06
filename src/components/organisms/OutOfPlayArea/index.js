import React, { Fragment, useState } from 'react';
import NoCards from '../../atoms/NoCards';
import Card from '../../atoms/Card';
import CardFocus from '../../molecules/CardFocus';
import Modal from '../../molecules/Modal';

const OutOfPlayArea = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [modalFocusedCard, setisModalFocused] = useState(false);
    
    const toggleShowModal = () => setShowModal(!showModal);
    const toggleModalFocus = (card) => setisModalFocused(card);

    const displayCards = props.cards && props.cards.length ? props.cards.map(card => (
        <Card
            isLandscape={props.area === 'deadArea'}
            key={card.cardKey}
            card={card}
            onClick={() => toggleShowModal(card)}
        />
    )).reverse() : [<NoCards/>]; //reverse() because each new addition is added to end of list
    const display =  displayCards[0];
    const areaReplace = props.area.replace(/Area/g, '')
    return (
        <Fragment>
            <div onClick={props.handleDraw} className={`${areaReplace}-pile`}>
                <div className="border" id={`${props.area.slice(0, 1).toUpperCase().concat(props.area.slice(1).replace(/Area/g, ''))}(${props.cards ? props.cards.length : 0})`}>
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
                            context={areaReplace}
                            handleDismiss={() => toggleModalFocus(null)}
                        />
                    )}
                </Modal>
            )}
        </Fragment>
    );
}

export default OutOfPlayArea;