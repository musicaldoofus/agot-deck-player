import React, { Component } from 'react';
import HUD from '../../molecules/HUD';
import FactionArea from '../FactionArea';
import PlotDeck from '../PlotDeck';
import PlotDeckUsed from '../PlotDeckUsed';
import CharacterArea, { LocationArea } from '../CharacterArea';
import deepClone from '../../../helpers/deepClone';
import './GameBoard.css';

class GameBoard extends Component {
	constructor(props) {
		super(props);
		const deck = deepClone(this.props.deck);
		this.state = {
			faction: this.props.deck.faction,
			agendaCard: deck.agendaCard,
			characterAreaCards: deck.inPlay.characters,
			plotDeckCards: deck.plotCards.active,
			plotDeckCardsUsed: deck.plotCards.inactive,
			locationAreaCards: deck.inPlay.locations
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
				<FactionArea
					faction={this.props.deck.faction}
					agenda={this.state.agendaCard ? this.state.agendaCard : null}
				/>
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