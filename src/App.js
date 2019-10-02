import React, { Fragment } from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/molecules/Nav';
import Splash from './components/pages/Splash';
import Get from './components/pages/Get';
import Play from './components/pages/Play';
import My from './components/pages/My';
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

const withContainer = (routes) => {
	const isGhPages = window.location.href.indexOf('github.io') > -1;
	return (
		<div className="app">
			{isGhPages ? withHashRouter(routes) : withBrowserRouter(routes)}
		</div>
	);
}

const App = () =>  {
	const routes = (
		<Fragment>
			<Nav/>
			<Switch>
				<Route
					exact
					path="/"
					component={Splash}
				/>
				<Route
					path="/get"
					component={Get}
				/>
				<Route
					path="/play"
					component={Play}
				/>
				<Route
					path="/my"
					component={My}
				/>
			</Switch>
		</Fragment>
	);
	return withContainer(routes);
}

export default App;