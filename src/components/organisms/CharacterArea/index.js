import React, { Component } from 'react';
import AreaCardList from '../../molecules/PureCardList'
import './CharacterArea.css';

class CharacterArea extends Component {
	constructor(props) {
		super(props);
		this.handleCardOnClick = this.handleCardOnClick.bind(this);
	}
	
	handleCardOnClick(card) {
		// console.log(card);
	}
	
	handleDismissOverlay() {
		
	}
	
	render() {
		return (
			<div className="board-area character-area">
				<AreaCardList
					cards={this.props.cards}
					onCardClick={this.handleCardOnClick}
					viewerLimit={5}
					colSize={120}
					label="Tap a character for card actions"
				/>
			</div>
		)
	}
}

export default CharacterArea;