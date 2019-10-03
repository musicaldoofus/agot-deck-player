import React, { useState } from 'react';
import Button from '../../atoms/Button';
import cardFocusOptions from '../../../helpers/cardFocusOptions';

const OptionsContainer = (props) => {
    const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

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
        //'attachment': 'attachment',
        'event': 'discardPileArea',
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
        'play': () => handleCardMove(handlerTypeCode),
        'discard': () => handleCardMove('discardPileArea'),
        'kneel': () => handleKneel(card)
    }
    const NoOptions = () => (
        <div>
            <p>Can't take any action on this card right now.</p>
        </div>
    );
    const AttachmentOptions = () => {
        return (
            <div className="options-attachment-container">

            </div>
        );
    }

    return (
        <div className="card-focus-controls">
            {availableOptions.length && availableOptions.length > 0 ? availableOptions.map(opt => (
                <Button
                    key={opt.label}
                    title={opt.label}
                    onClick={card.type_code === 'attachment' ? () => setShowAttachmentOptions(true) : handlers[opt.label]}
                />
            )) : (
                <NoOptions/>
            )}
            {showAttachmentOptions && (
                <AttachmentOptions/>
            )}
        </div>
    )
}

export default OptionsContainer;