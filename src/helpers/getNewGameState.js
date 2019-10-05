const getNewGameState = (params, gameState) => {
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
    }
    const updatedGameState = Object.assign({}, gameState, updatedParams());
    return updatedGameState;
}

export default getNewGameState;