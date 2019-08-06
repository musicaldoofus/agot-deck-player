//documentation --> https://thronesdb.com/api/doc
// import sampleDeck from './sampleDeck';

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

let localDecklist = {};

const getDeckFromAPI = (params, componentCallback) => getFromAPI(Object.assign(params, {type: 'decklist'}))
	.then(deck => {
        deck = JSON.parse(deck);
		Object.assign(localDecklist, deck, {cardList: {}});
		const promiseList = Object.keys(deck.slots).map(
			(cardId) => getFromAPI({id: cardId, type: 'card'})
				.then(cardObj => {
					cardObj = JSON.parse(cardObj);
					const type = cardObj.type_code;
					const typeList = localDecklist.cardList.hasOwnProperty(type) ? localDecklist.cardList[type] : [];
					localDecklist.cardList[type] = typeList.concat(cardObj);
				})
				.catch(err => console.error(`Error getting card from id ${cardId}`, err))
		);
		Promise.all(promiseList).then(() => componentCallback(localDecklist));
	})
	.catch(err => console.log(err))

export default getDeckFromAPI;