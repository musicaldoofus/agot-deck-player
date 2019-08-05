//documentation --> https://thronesdb.com/api/doc
import sampleDeck from './sampleDeck';

const getFromAPI = ({type, id, format = '.json'} = {}) => { //allow  default format to be json
	if (type === 'cards') return sampleDeck;
	const rootUrl = 'https://thronesdb.com/api';
	const scope = type === 'card' ? 'public' : 'oauth2';
	const reqUrl = `${rootUrl}/${scope}/${type}/${id}${format}`;
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState === 4 && this.status === 200) resolve(this.responseText);
		};
		xhttp.open("GET", reqUrl);
		xhttp.send();
	});
};

export default getFromAPI;