import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../molecules/Page';
import GameBoard from '../../organisms/GameBoard';
import { getFromDB } from '../../../helpers/dbHelpers';
import './Play.css';

const NoDeck = () => {
	return (
		<div className="no-deck">
			<h1>It looks like there's no active deck loaded.</h1>
			<p>Want to head over to <Link to="/get/decks">/get/decks</Link>?</p>
		</div>
	);
}

class Play extends Component {
	constructor() {
		super();
		this.state = {
			gameStates: []
		};
		this.handleFullscreen = this.handleFullscreen.bind(this);
		this.handleGameStateUpdate = this.handleGameStateUpdate.bind(this);
	}
	
	handleFullscreen() {
		document.documentElement.requestFullscreen();
	}
	
	handleGameStateUpdate(state) {
		//extend - add a unique key (e.g. hash fn) to allow targeting specific states to step back
		this.setState({gameStates: this.state.gameStates.concat(state)});
	}
	
	render() {
		const deck = this.props.deck ? this.props.deck : getFromDB('activeDeck');
		return (
			<Page title="Play">
				<button className="btn pull-top" onClick={this.handleFullscreen}>Fullscreen</button>
					{deck === undefined ?
						<NoDeck/>
						: <GameBoard
							deck={deck}
							handleGameStateUpdate={this.handleGameStateUpdate}
						/>
					}
			</Page>
		);
	}
}

export default Play;