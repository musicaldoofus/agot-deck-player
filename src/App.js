import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Root from './components/pages/Root';
import Get from './components/pages/Get';
import Play from './components/pages/Play';
import putToDB, { getFromDB } from './helpers/dbHelpers';
import './App.css';

const withHashRouter = (routes) => (
	<HashRouter>
		{routes}
	</HashRouter>
);

const withBrowserRouter = (routes) => (
	<Router>
		{routes}
	</Router>
);

class App extends Component {
	constructor() {
		super();
		this.state = {
			activeDeck: undefined, //convert to activeDeckIndex and use as ref to this.state.myDecks
			myDecks: getFromDB('myDecks')
		};
		this.handleSelectDeck = this.handleSelectDeck.bind(this);
		this.handleAddToMyDecks = this.handleAddToMyDecks.bind(this);
	}
	
	handleSelectDeck(activeDeck) {
		console.log('got activeDeck', activeDeck);
		// const activeDeckIndex = 0; <-- placeholder
		this.setState({
			activeDeck
		}, () => putToDB('activeDeck', activeDeck));
	}
	
	handleAddToMyDecks(deck) {
		console.log('add to myDecks', deck);
		this.setState({myDecks: this.state.myDecks.concat(deck)});
	}
	
	render() {
		const routes = (
			<Switch>
				<Route
					exact
					path="/"
					component={Root}
				/>
				<Route
					path="/get"
					render={(props) => <Get handleAddToMyDecks={this.handleAddToMyDecks} handleSelectDeck={this.handleSelectDeck} {...props}/>}
				/>
				<Route
					path="/play"
					render={(props) => <Play deck={this.state.activeDeck} {...props}/>}
				/>
			</Switch>
		);
		if (window.location.href.indexOf('github.io') > -1) return withHashRouter(routes); //required to work in gh-pages
		else return withBrowserRouter(routes);
	}
}

export default App;