const moveCardToHook = (card, fromArea, targetArea, gameState) => {
    console.log('moveCardToHook gameState', gameState);
    const updatedFromList = gameState[fromArea].filter(c => c.cardKey !== card.cardKey);
    const updatedTargetList = gameState[targetArea].concat(card);
    console.log('updatedFromList', updatedFromList, 'updatedTargetList', updatedTargetList);
    const updatedParams = {
        [fromArea]: updatedFromList,
        [targetArea]: updatedTargetList
    };
    console.log('updatedParams', updatedParams);
    const updatedGameState = Object.assign({}, gameState, updatedParams);
    console.log('updatedGameState', updatedGameState);
    return updatedGameState;
}

export default moveCardToHook