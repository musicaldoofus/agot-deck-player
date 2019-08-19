import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import GetCards from './GetCards';
import GetDecks from './GetDecks';

const Get = (props) => {
	// console.log('<Get>', props);
	return (
		<Fragment>
			<Route
				exact
				path={props.match.url}
				render={(p) => <Redirect to={`${p.match.url}/decks`}/>}
			/>
			<Route
				path={`${props.match.url}/decks`}
				render={(p) => <GetDecks handleSelectDeck={props.handleSelectDeck} {...p}/>}
			/>
			<Route
				path={`${props.match.url}/cards`}
				component={GetCards}
			/>
		</Fragment>
	);
}

export default Get;