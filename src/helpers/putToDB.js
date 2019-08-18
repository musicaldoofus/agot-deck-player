//todo: wrap in Promise objects

const putToDB = (key, value) => {
	window.localStorage.setItem(key, JSON.stringify(value));
}

const getFromDB = (key) => {
	return JSON.parse(window.localStorage.getItem(key));
}

export default putToDB;
export { getFromDB };