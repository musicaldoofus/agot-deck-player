const getNewGameState = (card, fromArea, targetArea, gameState) => {
    const updatedFromList = gameState[fromArea].filter(c => c.cardKey !== card.cardKey);
    const updatedTargetList = gameState[targetArea].concat(card);
    const updatedParams = {
        [fromArea]: updatedFromList,
        [targetArea]: updatedTargetList
    };
    const updatedGameState = Object.assign({}, gameState, updatedParams);
    return updatedGameState;
}

export default getNewGameState;