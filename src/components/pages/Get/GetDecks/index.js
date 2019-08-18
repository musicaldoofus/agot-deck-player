import React, { Component } from 'react';
import './GetDecks.css';

class GetDecks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			decklistCache: [],
			focusIndices: 0
		};
	}
	
	componentDidMount() {
		//get default decks to browse (extend via search API from thronesDB
		
		//add to this.state.decklistCache
	}
	
	render() {
		return (
			<div className="get-decks">
				
			</div>
		);
	}
}

export default GetDecks;