const getFromAPI = ({type, id, format = '.json'} = {}) => {
	console.log(type, id, format);
	const rootUrl = 'https://thronesdb.com/api';
	const scope = type === 'card' ? 'public' : 'oauth2';
	const reqUrl = `${rootUrl}/${scope}/${type}/${id}${format}`;
	if (type === 'cards') return [
		'01001',
		'01142',
		'03046',
	];
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