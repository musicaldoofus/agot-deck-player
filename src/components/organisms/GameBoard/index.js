import React, { Component } from 'react';
import HUD from '../../molecules/HUD';
import FactionArea from '../FactionArea';
import PlotDeck from '../PlotDeck';
import PlotDeckUsed from '../PlotDeckUsed';
import DrawPile from '../DrawPile';
import DiscardPile from '../DiscardPile';
import Hand from '../Hand';
import CharacterArea, { LocationArea } from '../CharacterArea';
import './GameBoard.css';

class GameBoard extends Component {
	constructor(props) {
		super(props);
		const drawDeckCards = Object.keys(this.props.deck.cardList) //Object.keys(this.props.deck.cardList)
			.filter(key => key !== 'agenda' && key !== 'plot')
			.map(key => this.props.deck.cardList[key])
			.flat();
		this.state = {
			faction: this.props.deck.faction_code,
			agendaCard: this.props.deck.agendaCard, //app is only handling single agenda for MVP
			characterAreaCards: [],
			plotDeckCards: this.props.deck.cardList.plot,
			plotDeckCardsUsed: [],
			locationAreaCards: [],
			drawDeckCards: drawDeckCards,
			handCards: [],
			discardPileCards: []
		};
		this.handleUpdatePlotDeck = this.handleUpdatePlotDeck.bind(this);
		this.handleDrawCards = this.handleDrawCards.bind(this);
		this.handlePutCardInArea = this.handlePutCardInArea.bind(this);
	}
	
	handleUpdatePlotDeck(card, source, target) {
		const plotDeckCards = this.state.plotDeckCards.filter(c => c.cardKey !== card.cardKey);
		const plotDeckCardsUsed = this.state.plotDeckCardsUsed.concat(card);
		this.setState({plotDeckCards, plotDeckCardsUsed}, () => this.props.handleGameStateUpdate(this.state));
	}
	
	handleDrawCards(cards) { //this code reads like hell
		const deckKeys = Object.keys(this.state.drawDeckCards);
		const cardsKeys = Object.keys(cards);
		const drawDeckCards = deckKeys
			.filter(dKey => cardsKeys
				.every(cKey => this.state.drawDeckCards[dKey].cardKey !== cards[cKey].cardKey)
			)
			.map(key => this.state.drawDeckCards[key]);
		const handCards = this.state.handCards.concat(cards);
		this.setState({drawDeckCards, handCards}, () => this.props.handleGameStateUpdate(this.state));
	}
	
	handlePutCardInArea(cardList, source, action) {
		// let gameTargets = {
			// character: {
				// play: 'characterAreaCards',
				// discard: 'discardPileCards'
			// },
			// event: 'discardPileCards',
			// location: {
				// play: 'locationAreaCards',
				// discard: 'discardPileCards'
			// }
		// };
		// const type = cardList[0].type_code; //extend to allow multiple cards to be processed in same action
		// const handCards = this.state.handCards
			// .filter(hKey => hKey.cardKey !== cardList.cardKey);
		this.setState({
			
		}, () => this.props.handleGameStateUpdate(this.state));
	}
	
	render() {
		return (
			<div className="game-board">
				<HUD/>
				<FactionArea
					faction={this.state.faction}
					agenda={this.state.agendaCard ? this.state.agendaCard : null}
				/>
				<PlotDeckUsed
					cards={this.state.plotDeckCardsUsed}
				/>
				<PlotDeck
					cards={this.state.plotDeckCards}
					onSelectCard={this.handleUpdatePlotDeck}
				/>
				<CharacterArea
					cards={this.state.characterAreaCards}
				/>
				<LocationArea
					cards={this.state.locationAreaCards}
				/>
				<DrawPile
					cards={this.state.drawDeckCards}
					handleDrawCards={this.handlePutCardInArea}
				/>
				<DiscardPile
					cards={this.state.discardPileCards}
				/>
				<Hand
					cards={this.state.handCards}
					handlePutCardIntoPlay={this.handlePutCardInArea}
				/>
			</div>
		);
	}
}

export default GameBoard;