const getNewGameState = (params, gameState) => {
    //console.log('getNewGameState', params);
    const updatedParams = () => {
        if (params.targetArea) {
            const updatedFromList = gameState[params.fromArea].filter(c => c.cardKey !== params.card.cardKey);
            const updatedTargetList = gameState[params.targetArea].concat(params.card);
            return {
                [params.fromArea]: updatedFromList,
                [params.targetArea]: updatedTargetList
            };
        }
        if (params.cardStatus) {
            const updatedCardStatus = {
                status: params.cardStatus
            };
            const updatedCardObj = Object.assign({}, params.card, updatedCardStatus);
            const updatedFromList = gameState[params.fromArea].map(c => c.cardKey === params.card.cardKey ? updatedCardObj : c);
            return {
                [params.fromArea]: updatedFromList
            };
        }
        if (params.drawAmt) {
            //console.log('drawAmt', params.drawAmt);
            const drawCards = gameState.drawPileArea.slice(0, params.drawAmt);
            const updatedDrawPileArea = gameState.drawPileArea.slice(params.drawAmt + 1);
            const updatedHand = gameState.hand.concat(drawCards).flat(); //test - may not need flat()
            return {
                hand: updatedHand,
                drawPileArea: updatedDrawPileArea
            };
        }
    }
    const updatedGameState = Object.assign({}, gameState, updatedParams());
    return updatedGameState;
}

export default getNewGameState;