import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../molecules/Page';
import './Root.css';

class Root extends Component {
	constructor() {
		super();
		this.state = {
			
		};
	}
	
	// componentDidMount() {
		// console.log('mounted <Root>', this.props);
	// }
	
	render() {
		return (
			<Page title="Play">
				<h1>Root</h1>
				<Link to="/play">Play</Link>
			</Page>
		);
	}
}

export default Root;