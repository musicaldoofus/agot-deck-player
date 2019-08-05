import React, { Component } from 'react';
import Page from '../../molecules/Page';
import GameBoard from '../../organisms/GameBoard';
import './Play.css';

class Play extends Component {
	handleFullscreen() {
		document.documentElement.requestFullscreen();
	}
	
	render() {
		return (
			<Page title="Play">
				<button className="btn pull-top" onClick={this.handleFullscreen}>Fullscreen</button>
				<GameBoard deck={this.props.deck}/>
			</Page>
		);
	}
}

export default Play;