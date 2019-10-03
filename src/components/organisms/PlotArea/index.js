import React, { useState } from 'react';
import Modal from '../../molecules/Modal';
import Card from '../../atoms/Card';

const PlotArea = (props) => {
    const [showModal, setShowModal] = useState(false);
    const toggleShowModal = () => setShowModal(!showModal);

    const cards = props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="area plot-area">
            {!showModal ? (
                <Card
                    isBackside
                    isLandscape
                    onClick={toggleShowModal}
                />
            ) : (
                <Modal
                    handleClose={toggleShowModal}
                >
                    {cards}
                </Modal>
            )}
        </div>
    );
}

export default PlotArea;