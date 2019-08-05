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
			plotDeckCards: deepClone(this.props.deck.plotCards.active)
		};
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
				/>
			</div>
		);
	}
}

export default GameBoard;