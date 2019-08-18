import React, { Component } from 'react';
import CardPileBtn from '../../atoms/CardPileBtn';
import OverlayCardList from '../OverlayCardList';
import './DrawPile.css';

/*
to do:
add toggle fullscreen back to allow mechanics for "draw X cards from the top of your deck"; display all cards in <OverlayCardList>
*/

class DrawPile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false
		};
		this.handleDrawCard = this.handleDrawCard.bind(this);
		this.handleRemoveCard = this.handleRemoveCard.bind(this);
		this.getCardFromDeck = this.getCardFromDeck.bind(this);
	}
	
	handleDrawCard(amt) {
		amt = !amt ? 1 : amt;
		const cards = Array.from({length: amt}, (_) => this.getCardFromDeck());
		this.props.handleDrawCards(cards);
	}
	
	getCardFromDeck() {
		return this.props.cards[Object.keys(this.props.cards)[0]];
	}
	
	handleRemoveCard(c) {
		// console.log('got', c);
	}
		
	render() {
		const cardOptions = [];
		return (
			<div className="board-area draw-pile">
				{this.state.isFullscreen && 
					<OverlayCardList
						cards={this.props.focusCards}
						onDismiss={this.handleToggleFullscreen}
						onSelectCard={this.handleSelectCard}
						label="Select a Plot card from your Plot deck to play"
						viewerLimit={3}
						cardOptions={cardOptions}
					/>
				}
				<CardPileBtn
					onClick={() => this.handleDrawCard()}
				/>
			</div>
		)
	}
}

export default DrawPile;