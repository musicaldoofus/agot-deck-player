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
		this.handleShuffleDrawDeck = this.handleShuffleDrawDeck.bind(this);
		this.handleMoveCards = this.handleMoveCards.bind(this);
	}
	
	handleShuffleDrawDeck() {
		let shuffledDeck = this.state.drawDeckCards.slice();
		//Fisher-Yates shuffle algorithm
		for (let i = shuffledDeck.length - 1; i > 0; i--) {
			const randIndex = Math.floor(Math.random() * (i + 1));
			[shuffledDeck[i], shuffledDeck[randIndex]] = [shuffledDeck[randIndex], shuffledDeck[i]];
		}
		this.setState({drawDeckCards: shuffledDeck});
	}
	
	handleMoveCards(cards, source, target) {
		const sourceCards = this.state[source]
			.filter(sourceCard => cards
				.filter(c => c.keyInd !== sourceCard.keyInd).length === 0);
		// console.log('sourceCards', sourceCards);
		const targetCards = this.state[target].concat(cards);
		this.setState({
			[source]: sourceCards,
			[target]: targetCards
		});
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
					handleShuffle={this.handleShuffleDrawDeck}
					handleDraw={(cards) => this.handleMoveCards(cards, 'drawDeckCards', 'handCards')}
				/>
				<DiscardPile
					cards={this.state.discardPileCards}
				/>
				<Hand
					cards={this.state.handCards}
				/>
			</div>
		);
	}
}

export default GameBoard;