import React, { Component } from 'react';
import HUD from '../../molecules/HUD';
import PlotDeck from '../../organisms/PlotDeck';
import CharacterArea from '../../organisms/CharacterArea';
import deepClone from '../../../helpers/deepClone';
import './GameBoard.css';

class GameBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			characterAreaCards: deepClone(this.props.deck.inPlay.characters.active),
			plotDeckCards: deepClone(this.props.deck.plotCards.active),
			plotDeckCardsUsed: deepClone(this.props.deck.plotCards.inactive)
		};
		this.handleUpdatePlotDeck = this.handleUpdatePlotDeck.bind(this);
	}
	
	handleUpdatePlotDeck(card, action = 'play') {
		// console.log(card, action);
		//remove plot card from state list
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
				<PlotDeck
					cards={this.state.plotDeckCards}
					onSelectCard={this.handleUpdatePlotDeck}
				/>
			</div>
		);
	}
}

export default GameBoard;