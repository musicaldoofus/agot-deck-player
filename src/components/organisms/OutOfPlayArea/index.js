import React from 'react';
import NoCards from '../../atoms/NoCards';
import Card from '../../atoms/Card';
import InnerModal from '../InnerModal';

const OutOfPlayArea = (props) => {
    const areaReplace = props.area.replace(/Area/g, '')
    const outOfPlayInner = (
        <InnerModal
            {...props}
            context={areaReplace}
            handleModalDismiss={() => props.handleModalToggle(null)}
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