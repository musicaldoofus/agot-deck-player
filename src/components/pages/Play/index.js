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
			deck: undefined
		};
		this.onDeckLoaded = this.onDeckLoaded.bind(this);
		this.handleFullscreen = this.handleFullscreen.bind(this);
	}
	
	onDeckLoaded(deck) {
		console.log('Play', deck);
		this.setState({deck});
	}
	
	componentDidMount() {
		if (!this.state.deck) getDeckFromAPI({id: 13145}, this.onDeckLoaded);
	}
	
	handleFullscreen() {
		document.documentElement.requestFullscreen();
	}
	
	render() {
		console.log('render', this.props.deck);
		return (
			<Page title="Play">
				<button className="btn pull-top" onClick={this.handleFullscreen}>Fullscreen</button>
					{!this.state.deck ?
						<Loading/>
						: <GameBoard deck={this.state.deck}/>
					}
			</Page>
		);
	}
}

export default Play;