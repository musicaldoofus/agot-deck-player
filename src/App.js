import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
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
	const routes = (
		<Switch>
			<Route
				exact
				path="/"
				component={Root}
			/>
			<Route
				path="/play"
				component={Play}
			/>
		</Switch>
	);
	if (window.location.href.indexOf('github.io') > -1) return withHashRouter(routes); //required to work in gh-pages
	else return withBrowserRouter(routes);
}

export default App;