//documentation --> https://thronesdb.com/api/doc
import getUniqueKey from './getUniqueKey';

const reqAPI = ({type, id, scope = 'public', format = '.json'} = {}) => {
	const rootUrl = 'https://thronesdb.com/api';
	const reqUrl = `${rootUrl}/${scope}/${type}/${id}${format}`;
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) resolve(this.responseText);
		};
		//add error handling using reject(err)
		xhttp.open("GET", reqUrl);
		xhttp.send();
	});
};

let keyMemo = [];

const getCardParams = () => ({
	cardKey: getUniqueKey(keyMemo),
	status: 'standing'
});

const constructCardObj = (card) => {
	const parsedCard = typeof card === 'string' ? JSON.parse(card) : card;
	//console.log('constructCardObj', card.cardKey, parsedCard, getCardParams());
	return Object.assign({}, parsedCard, getCardParams());
}

const getCardFromAPI = (cardId) => reqAPI({type: 'card', id: cardId})
	.then(cardObj => constructCardObj(cardObj))
	.catch(err => console.error(`Error getting card from id ${cardId}`, err))

const getCardsFromDeck = (deckObj, callback) => {
	const parsedDeck = typeof deckObj === 'string' ? JSON.parse(deckObj) : deckObj;
	const promiseListkeys = Object
		.keys(parsedDeck.slots);
	const promiseList = promiseListkeys
		.map(cardId => getCardFromAPI(cardId));
	Promise.all(promiseList)
		.then((results) => {
			const constructedResults = results.map((r) => {
				const amt = parsedDeck.slots[r.code];
				return Array.from({ length: amt }, () => constructCardObj(r));
			});
			callback(constructedResults.flat());
		})
		.catch(err => {
			//console.info('err @ getCardsFromDeck Promise.all')
			console.error(err);
		});
}

const getDeckFromAPI = (deckId) => reqAPI({type: 'decklist', id: deckId})
		.then((deckObj) => JSON.parse(deckObj))
		.catch(err => {
			//console.info('err @ getDeckFromAPI');
			console.error(err);
		});

export default getDeckFromAPI;
export { getCardFromAPI, getCardsFromDeck };