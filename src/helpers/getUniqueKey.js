const getUniqueKey = (keyMemo) => {
	let newKey = 100 * Math.random();
	if (keyMemo.indexOf(newKey) > -1) newKey = newKey * 2;
	keyMemo.push(newKey);
	return newKey;
}

export default getUniqueKey;