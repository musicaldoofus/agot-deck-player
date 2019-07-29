import React from 'react';
import './App.css';
import getFromAPI from './utils/getFromAPI';
import CardGroup from './components/molecules/CardGroup';

const App = () => {
	const cards = getFromAPI({type: 'cards', id: 0});
	return (
		<div>
			<p>CardGroup:</p>
			<CardGroup cards={cards}/>
		</div>
	);
}

export default App;