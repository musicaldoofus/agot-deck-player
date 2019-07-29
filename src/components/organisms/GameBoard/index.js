import React, { Component } from 'react';
import HUD from '../../molecules/HUD';
import BoardArea from '../BoardArea';
import CardList from '../../molecules/CardList';
import './GameBoard.css';

class GameBoard extends Component {
	componentDidMount() {
	}
	
	render() {
		// console.log('render <GameBoard>', this.props);
		return (
			<div className="game-board">
				<HUD/>
				<BoardArea label="plot deck">
					<CardList cards={this.props.deck.plotCards.active}/>
				</BoardArea>
				<BoardArea label="used plot cards">
					<CardList cards={this.props.deck.plotCards.inactive}/>
				</BoardArea>
				<BoardArea label="characters">
					<CardList cards={this.props.deck.inPlay.characters}/>
				</BoardArea>
				<BoardArea label="locations">
					<CardList cards={this.props.deck.inPlay.locations}/>
				</BoardArea>
				<BoardArea label="hand">
					<CardList cards={this.props.deck.currentHand}/>
				</BoardArea>
				<BoardArea label="faction card">
					<CardList cards={this.props.deck.factionCard}/>
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