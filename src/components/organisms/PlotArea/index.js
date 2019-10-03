import React, { useState } from 'react';
import Modal from '../../molecules/Modal';
import Card from '../../atoms/Card';
import NoCards from '../../atoms/NoCards';

const PlotArea = (props) => {
    const [showModal, setShowModal] = useState(false);
    const toggleShowModal = () => setShowModal(!showModal);

    const cards = props.cards && props.cards.map(card => <Card key={card.cardKey} card={card}/>);
    return (
        <div className="plot-area">
            <div className="border" id={`Plot(${props.cards.length})`}>
                {props.cards.length > 0 ? (
                    <Card
                        isBackside
                        isLandscape
                        onClick={toggleShowModal}
                    />
                ) : (
                    <NoCards isLandscape/>
                )}
            </div>
            {showModal && (
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