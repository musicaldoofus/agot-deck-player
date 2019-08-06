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
		console.log('GB', props.deck.cardList);
		this.state = {
			faction: this.props.deck.faction_code,
			agendaCard: this.props.deck.agendas[0], //app is only handling single agenda for MVP
			characterAreaCards: [],
			plotDeckCards: this.props.deck.cardList.plot,
			plotDeckCardsUsed: [],
			locationAreaCards: [],
			drawDeckCards: [],
			discardPileCards: []
		};
		console.log(this.state);
		this.handleUpdatePlotDeck = this.handleUpdatePlotDeck.bind(this);
		this.handleUpdateDiscardPile = this.handleUpdateDiscardPile.bind(this);
	}
	
	componentDidUpdate(prevProps, prevState) {
		console.log('GameBoard didUpdate()', this.props);
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
	
	render() {
		return (
			<div className={`game-board ${this.state.orientation}`}>
				<HUD/>
				<FactionArea
					faction={this.state.faction}
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