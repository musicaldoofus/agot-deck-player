import React, { useState } from 'react';
import Button from '../../atoms/Button';
import cardFocusOptions from '../../../helpers/cardFocusOptions';

const OptionsContainer = (props) => {
    const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

    const { card, context, handleCardMove, handleKneel, handleDismiss } = props;
    //const inCurrentPhase = (opt) => opt.availablePhases.indexOf(props.phase) > -1;
    const inAvailableCards = (opt) => opt.availableCards.indexOf(card.type_code) > -1;
    const inAvailableContext = (opt) => opt.availableContext.indexOf(context) > -1;
    const typeCodeMap = {
        'faction' : 'factionArea',
        'deck' : 'drawPileArea',
        'plot' : 'plotArea',
        'hand' : 'hand',
        'character' : 'characterArea',
        'location' : 'locationArea',
        //'attachment': 'attachment',
        'event': 'discardArea',
        'plotDiscard' : 'plotDiscardArea',
        'discard' : 'discardArea',
        'dead' : 'deadArea'
    };
    const handlerTypeCode = typeCodeMap[card.type_code];
    const availableOptions = cardFocusOptions
        //.filter(inCurrentPhase)
        .filter(inAvailableCards)
        .filter(inAvailableContext);
    const tryHandleDismiss = () => {
        if (handleDismiss) handleDismiss();
    }
    const basicMove = () => {
        handleCardMove(handlerTypeCode);
        tryHandleDismiss();
    }
    const kneelWrapper = () => {
        handleKneel(card);
        tryHandleDismiss();
    }
    const discardWrapper = () => {
        handleCardMove('discardArea');
        tryHandleDismiss();
    }
    const killWrapper = () => {
        handleCardMove('deadArea');
        tryHandleDismiss();
    }
    const choosePlotWrapper = () => {
        //console.log('choose plot wrapper');
        handleCardMove('plotDiscardArea');
        tryHandleDismiss();
    }
    const handlers = {
        'marshal': basicMove,
        'put into play': basicMove,
        'play': basicMove,
        'discard': discardWrapper,
        'kneel': kneelWrapper,
        'kill': killWrapper,
        'choose plot': choosePlotWrapper
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