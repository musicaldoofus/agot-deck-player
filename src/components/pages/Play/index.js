import React, { Component } from 'react';
import Page from '../../molecules/Page';
import GameBoard from '../../organisms/GameBoard';
import './Play.css';

class Play extends Component {
	render() {
		console.log('render <Play>');
		console.log(this.props);
		return (
			<Page title="Play">
				<GameBoard deck={this.props.deck}/>
			</Page>
		);
	}
}

export default Play;