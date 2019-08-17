import React, { Component } from 'react';
import Page from '../../molecules/Page';
import Loading from '../../atoms/Loading';
import GameBoard from '../../organisms/GameBoard';
import getDeckFromAPI from '../../../helpers/getFromAPI';
import './Play.css';

class Play extends Component {
	constructor() {
		super();
		this.state = {
			deck: undefined,
			gameStates: []
		};
		this.onDeckLoaded = this.onDeckLoaded.bind(this);
		this.handleFullscreen = this.handleFullscreen.bind(this);
		this.handleGameStateUpdate = this.handleGameStateUpdate.bind(this);
	}
	
	onDeckLoaded(deck) {
		// console.log('deck', Object.keys(deck));
		this.setState({deck});
	}
	
	componentDidMount() {
		if (!this.state.deck) getDeckFromAPI({id: 13145}, this.onDeckLoaded);
	}
	
	handleFullscreen() {
		document.documentElement.requestFullscreen();
	}
	
	handleGameStateUpdate(state) {
		//extend - add a unique key (e.g. hash fn) to allow targeting specific states to step back
		this.setState({gameStates: this.state.gameStates.concat(state)});
	}
	
	render() {
		return (
			<Page title="Play">
				<button className="btn pull-top" onClick={this.handleFullscreen}>Fullscreen</button>
					{!this.state.deck ?
						<Loading/>
						: <GameBoard
							deck={this.state.deck}
							handleGameStateUpdate={this.handleGameStateUpdate}
						/>
					}
			</Page>
		);
	}
}

export default Play;