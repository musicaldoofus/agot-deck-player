import userCache from './cardCache';
import getDeckFromAPI, { getCardFromAPI, getCardsFromDeck } from './apiHelpers';

const getCardLocal = (cardId) => userCache.get('card', cardId);
const getAllCardsLocal = () => userCache.get('card', null, true);
const getDeckLocal = (deckId) => userCache.get('decklist', deckId);
const getAllDecksLocal = () => userCache.get('decklist', null, true);

const getItem = (type, id) => {
    const itemFromCacheFn = type === 'card' ? getCardLocal : getDeckLocal;
    const getFromAPI = type === 'card' ? getCardFromAPI : getDeckFromAPI;
    const itemFromCache = itemFromCacheFn(id);
    return new Promise((resolve) => {
        if (itemFromCache) resolve(itemFromCache);
        else getFromAPI(id)
            .then(dataObj => {
                if (type === 'card') resolve(dataObj);
                else {
                    const resolveCards = (cards) => {
                        let constructedDeck = Object.assign({}, dataObj, { cards });
                        resolve(constructedDeck);
                    };
                    getCardsFromDeck(dataObj, resolveCards);
                }
            });
    });
}

export default getItem;
export { getDeckLocal, getAllDecksLocal, getCardLocal, getAllCardsLocal };