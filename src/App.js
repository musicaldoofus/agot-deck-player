import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import getFromAPI from './utils/getFromAPI';
import Root from './components/pages/Root';
import Play from './components/pages/Play';
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

const App = () => {
	const cards = getFromAPI({type: 'cards', id: 0});
	const routes = (
		<Switch>
			<Route
				exact
				path="/"
				render={(props) => <Root {...props}/>}
			/>
			<Route
				path="/play"
				render={(props) => <Play deck={cards} {...props}/>}
			/>
		</Switch>
	);
	if (window.location.href.indexOf('github.io') > -1) return withHashRouter(routes);
	else return withBrowserRouter(routes);
}

export default App;