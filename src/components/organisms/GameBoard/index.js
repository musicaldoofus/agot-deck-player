import React, { Component } from 'react';
import HUD from '../../molecules/HUD';
import FactionArea from '../FactionArea';
import PlotDeck from '../PlotDeck';
import PlotDeckUsed from '../PlotDeckUsed';
import DiscardPile from '../DiscardPile';
import CharacterArea, { LocationArea } from '../CharacterArea';
import deepClone from '../../../helpers/deepClone';
import isPortrait from '../../../helpers/isPortrait';
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
			locationAreaCards: deck.inPlay.locations,
			drawDeckCards: deck.drawDeckCards,
			discardPileCards: deck.discardPile
		};
		this.handleUpdatePlotDeck = this.handleUpdatePlotDeck.bind(this);
		this.handleUpdateDiscardPile = this.handleUpdateDiscardPile.bind(this);
		this.updateOrientation = this.updateOrientation.bind(this);
	}
	
	handleUpdatePlotDeck(card, action = 'play') {
		const plotDeckCards = this.state.plotDeckCards.filter(c => c.code !== card.code);
		const plotDeckCardsUsed = this.state.plotDeckCardsUsed.concat(card);
		this.setState({plotDeckCards, plotDeckCardsUsed});
	}
	
	handleUpdateDiscardPile(card, action = 'discard', target) {
		const discardPileCards = this.state.discardPileCards;
		const drawDeckCards = this.state.drawDeckCards;
		
	}
	
	updateOrientation(e) {
		// console.log(e);
		const orientation = isPortrait() ? 'portrait' : 'landscape';
		this.setState({orientation});
	}
	
	componentDidMount() {
		window.addEventListener('resize deviceorientation', this.updateOrientation);
	}
	
	render() {
		return (
			<div className={`game-board ${this.state.orientation}`}>
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
				<DiscardPile
					cards={this.state.discardPileCards}
				/>
			</div>
		);
	}
}

export default GameBoard;