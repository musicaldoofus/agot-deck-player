import React, { Component } from 'react';
import HUD from '../../molecules/HUD';
import PlotDeck from '../PlotDeck';
import PlotDeckUsed from '../PlotDeckUsed';
import CharacterArea, { LocationArea } from '../CharacterArea';
import deepClone from '../../../helpers/deepClone';
import './GameBoard.css';

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characterAreaCards: deepClone(this.props.deck.inPlay.characters.active),
			plotDeckCards: deepClone(this.props.deck.plotCards.active),
			plotDeckCardsUsed: deepClone(this.props.deck.plotCards.inactive),
			locationAreaCards: deepClone(this.props.deck.inPlay.locations.active)
		};
		this.handleUpdatePlotDeck = this.handleUpdatePlotDeck.bind(this);
	}
	
	handleUpdatePlotDeck(card, action = 'play') {
		const plotDeckCards = this.state.plotDeckCards.filter(c => c.code !== card.code);
		const plotDeckCardsUsed = this.state.plotDeckCardsUsed.concat(card);
		this.setState({plotDeckCards, plotDeckCardsUsed});
	}
	
	render() {
		return (
			<div className="game-board">
				<HUD/>
				<CharacterArea
					cards={this.state.characterAreaCards}
				/>
				<LocationArea
					cards={this.state.locationAreaCards}
				/>
				<PlotDeckUsed
					cards={this.state.plotDeckCardsUsed}
				/>
				<PlotDeck
					cards={this.state.plotDeckCards}
					onSelectCard={this.handleUpdatePlotDeck}
				/>
			</div>
		);
	}
}

export default GameBoard;