import React, { Component } from 'react';
import CardPileBtn from '../../atoms/CardPileBtn';
import Overlay from '../../molecules/Overlay';
import CardList from '../../molecules/CardList';
import './PlotDeck.css';

class PlotDeck extends Component {
	constructor(props) {
		super(props);
		console.log('p constructor', props);
		this.state = {
			isFullscreen: false
		};
		this.handleCardOnClick = this.handleCardOnClick.bind(this);
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
	}
	
	handleToggleFullscreen() {
		this.setState({isFullscreen: !this.state.isFullscreen});
	}
	
	handleCardOnClick(c) {
		console.log('clicked card', c);
	}
	
	render() {
		return (
			<div className="board-area plot-deck">
				{this.state.isFullscreen ? (
					<Overlay>
						<div className="card-list-container">
							<CardList cards={this.props.cards} onClick={this.handleCardOnClick}/>
						</div>
					</Overlay>
				) : (
					<CardPileBtn onClick={this.handleToggleFullscreen}/>
				)}
			</div>
		)
	}
}

export default PlotDeck;