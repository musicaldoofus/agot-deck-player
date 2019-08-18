import React, { Component } from 'react';
import CardPileBtn from '../../atoms/CardPileBtn';
import OverlayCardList from '../OverlayCardList';
import './Hand.css';

class Hand extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false
		};
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
		this.handlePutCardIntoPlay = this.handlePutCardIntoPlay.bind(this);
	}
	
	handleToggleFullscreen() {
		this.setState({isFullscreen: !this.state.isFullscreen});
	}
	
	handlePutCardIntoPlay(c) {
		this.props.handlePutCardIntoPlay(c);
		this.handleToggleFullscreen();
	}
		
	render() {
		const cardOptions = [
			{
				label: 'Place into play',
				optionCallback: this.handlePutCardIntoPlay
			}
		];
		return (
			<div className="board-area hand">
				{this.state.isFullscreen && 
					<OverlayCardList
						cards={this.props.cards}
						onDismiss={this.handleToggleFullscreen}
						onSelectCard={this.handleSelectCard}
						label="View cards in your hand"
						viewerLimit={5}
						cardOptions={cardOptions}
					/>
				}
				<CardPileBtn
					onClick={this.handleToggleFullscreen}
				/>
			</div>
		)
	}
}

export default Hand;