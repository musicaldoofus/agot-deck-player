//documentation --> https://thronesdb.com/api/doc
// import sampleDeck from './sampleDeck';

const getEnv = () => {
	if (window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('0.0.0.0') > -1) return 'dev';
	else if (window.location.href.indexOf('github.io') > -1) return 'prod-gh';
}

const getFromAPI = ({type, id, scope = 'public', format = '.json'} = {}) => { //allow  default format to be json
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

// const deckFromLocalStorage = window.localStorage.getItem('localDecklist');

let localDecklist = {};

let keyMemo = [];

const getUniqueKey = () => {
	let newKey = 100 * Math.random();
	if (keyMemo.indexOf(newKey) > -1) newKey = newKey * 2;
	keyMemo.push(newKey);
	return newKey;
}

/*
todo:
- add each card's number of instances per decklist object
- add cardKey to each card
*/

const getDeckFromAPI = (params, componentCallback) => {
	// if (deckFromLocalStorage !== null) {
		// componentCallback(JSON.parse(deckFromLocalStorage));
		// return;
	// }
	return getFromAPI(Object.assign(params, {type: 'decklist'}))
		.then(deck => {
			deck = JSON.parse(deck);
			Object.assign(localDecklist, deck, {cardList: {}, agendaCard: {}});
			const promiseList = Object.keys(deck.slots).map(
				(cardId, cardInd) => getFromAPI({id: cardId, type: 'card'})
					.then(cardObj => {
						cardObj = Object.assign({}, JSON.parse(cardObj), {cardKey: getUniqueKey()});
						const type = cardObj.type_code;
						const typeList = localDecklist.cardList.hasOwnProperty(type) ? localDecklist.cardList[type] : [];
						localDecklist.cardList[type] = typeList.concat(cardObj);
					})
					.catch(err => console.error(`Error getting card from id ${cardId}`, err))
			)
			.concat(
				getFromAPI({id: Number(deck.agendas[0]), type: 'card'})
					.then(cardObj => localDecklist.agendaCard = JSON.parse(cardObj))
					.catch(err => console.log(err))
			);
			Promise.all(promiseList)
				.then(() => componentCallback(localDecklist))
				.catch(err => console.log(err))
				.finally(() => {
					if (getEnv() === 'dev') localStorage.setItem('localDecklist', JSON.stringify(localDecklist)); //avoid repeated API calls when developing
				});
		})
		.catch(err => console.error(err));
}

export default getDeckFromAPI;
export { getEnv };