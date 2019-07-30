import React, { Component } from 'react';
import HUD from '../../molecules/HUD';
import PlotDeck from '../../organisms/PlotDeck';
// import PlotDeckUsed from '../../organisms/PlotDeckUsed';
import CardList from '../../molecules/CardList';
import BoardArea from '../../organisms/BoardArea';
import './GameBoard.css';

class CharacterArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
		this.handleCardOnClick = this.handleCardOnClick.bind(this);
	}
	
	handleCardOnClick(c) {
		console.log('card clicked in CharacterArea', c);
	}
	
	render() {
		return (
			<div className="board-area character-area">
				<CardList cards={this.props.cards} onClick={this.handleCardOnClick}/>
			</div>
		)
	}
}

class GameBoard extends Component {
	render() {
		return (
			<div className="game-board">
				<HUD/>
				<PlotDeck cards={this.props.deck.plotCards.active}/>
				<CharacterArea cards={this.props.deck.inPlay.characters}/>
				<BoardArea label="locations">
					<CardList expanded cards={this.props.deck.inPlay.locations}/>
				</BoardArea>
				<BoardArea label="hand">
					<CardList cards={this.props.deck.currentHand}/>
				</BoardArea>
				<BoardArea label="faction card">
					<CardList singular cards={this.props.deck.factionCard}/>
				</BoardArea>
				<BoardArea label="draw deck">
					<CardList cards={this.props.deck.currentDrawDeck}/>
				</BoardArea>
				<BoardArea label="discard pile">
					<CardList cards={this.props.deck.currentDiscardPile}/>
				</BoardArea>
				<BoardArea label="dead pile">
					<CardList cards={this.props.deck.currentDeadPile}/>
				</BoardArea>
			</div>
		);
	}
}

export default GameBoard;