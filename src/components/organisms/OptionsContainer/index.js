import React from 'react';
import Button from '../../atoms/Button';
import cardFocusOptions from '../../../helpers/cardFocusOptions';

const OptionsContainer = (props) => {
    const { card, handleCardMove, handleKneel } = props;
    //const inCurrentPhase = (opt) => opt.availablePhases.indexOf(props.phase) > -1;
    const inAvailableCards = (opt) => opt.availableCards.indexOf(props.card.type_code) > -1;
    const inAvailbleContext = (opt) => opt.availableCards.indexOf(props.card.type_code) > -1;
    const typeCodeMap = {
        'faction' : 'factionArea',
        'deck' : 'drawPileArea',
        'plot' : 'plotArea',
        'hand' : 'hand',
        'character' : 'characterArea',
        'location' : 'locationArea',
        'plotDiscard' : 'plotDiscardArea',
        'discard' : 'discardPileArea',
        'dead' : 'deadArea'
    };
    const handlerTypeCode = typeCodeMap[card.type_code];
    const availableOptions = cardFocusOptions
        //.filter(inCurrentPhase)
        .filter(inAvailableCards)
        .filter(inAvailbleContext);
    const handlers = {
        'marshal': () => handleCardMove(handlerTypeCode),
        'put into play': () => handleCardMove(handlerTypeCode),
        'play': () => handleCardMove('discard'),
        'discard': () => handleCardMove('discard'),
        'kneel': () => handleKneel(card)
    }
    const options = availableOptions.length > 1 ? availableOptions.map(opt => (
            <Button
                key={opt.label}
                title={opt.label}
                onClick={handlers[opt.label]}
            />
        )) : (
            <div>
                <p>Can't take any action on this card right now.</p>
            </div>
        );
    return (
        <div className="card-focus-controls">
            {options}
        </div>
    )
}

export default OptionsContainer;