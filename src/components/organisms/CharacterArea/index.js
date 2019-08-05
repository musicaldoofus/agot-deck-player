import React, { Component } from 'react';
import AreaCardList from '../../molecules/PureCardList'
import './CharacterArea.css';

class CharacterArea extends Component {
	constructor(props) {
		super(props);
		this.handleCardOnClick = this.handleCardOnClick.bind(this);
		// this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
	}
	
	// handleToggleFullscreen() {
		// this.setState({
			// isFullscreen: !this.state.isFullscreen,
		// });
	// }
	
	handleCardOnClick(card) {
		// console.log(card);
	}
	
	render() {
		const cards = this.props.cards.map(c => c);
		return (
			<div className="board-area character-area">
				<AreaCardList
					cards={cards}
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