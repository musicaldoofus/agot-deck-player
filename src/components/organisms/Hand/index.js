import React, { Fragment, useState } from 'react';
import CardImg from '../../atoms/CardImg';
import Card from '../../atoms/Card';
import './Hand.css';
import Modal from '../../molecules/Modal';

const Hand = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            <div className="hand hover-float" onClick={() => setShowModal(true)}>
                <CardImg isBackside/>
                <CardImg isBackside/>
                <CardImg isBackside/>
            </div>
            {showModal && (
                <Modal
                    handleClose={() => setShowModal(false)}
                >
                    {props.cards.map(card => <Card key={card.cardKey} card={card}>{card.name}</Card>)}
                </Modal>
            )}
        </Fragment>
    );
}

export default Hand;