import React, { useState } from 'react';
import NoCards from '../../atoms/NoCards';
import Card from '../../atoms/Card';
import CardFocus from '../../molecules/CardFocus';

const OutOfPlayInner = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [modalFocusedCard, setisModalFocused] = useState(false);
    
    const toggleShowModal = () => setShowModal(!showModal);
    const toggleModalFocus = (card) => setisModalFocused(card);

    return !modalFocusedCard ? (
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
            context={props.areaReplace}
            handleDismiss={() => toggleModalFocus(null)}
        />
    );
}

const OutOfPlayArea = (props) => {
    const areaReplace = props.area.replace(/Area/g, '')
    const outOfPlayInner = (
        <OutOfPlayInner
            {...props}
            areaReplace={areaReplace}
        />
    );
    const latestCard = props.cards && props.cards.length ? props.cards[props.cards.length - 1] : null;
    const display = latestCard ? (
        <Card
            isLandscape={props.area === 'deadArea'}
            key={props.cards[props.cards.length - 1].cardKey}
            card={props.cards[props.cards.length - 1]}
            onClick={() => props.handleModalToggle(outOfPlayInner)}
        />
    ) : <NoCards/>;
    return (
        <div className={`${areaReplace}-pile`}>
            <div className="border" id={`${props.area.slice(0, 1).toUpperCase().concat(props.area.slice(1).replace(/Area/g, ''))}(${props.cards ? props.cards.length : 0})`}>
                {display}
            </div>
        </div>
    );
}

export default OutOfPlayArea;