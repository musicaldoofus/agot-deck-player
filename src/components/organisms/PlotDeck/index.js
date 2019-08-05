import React, { Component } from 'react';
import CardPileBtn from '../../atoms/CardPileBtn';
import { OverlayCardList } from '../../molecules/PureCardList';
import './PlotDeck.css';

class PlotDeck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false
		};
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
		this.handleSelectCard = this.handleSelectCard.bind(this);
		this.handleRemoveCard = this.handleRemoveCard.bind(this);
	}
	
	handleToggleFullscreen() {
		this.setState({
			isFullscreen: !this.state.isFullscreen,
		});
	}
	
	handleSelectCard(c) {
		this.setState({isFullscreen: false});
		this.props.onSelectCard(c);
	}
	
	handleRemoveCard(c) {
		// console.log('got', c);
	}
		
	render() {
		const cardOptions = [
			{
				label: 'Select Plot card',
				optionCallback: this.handleSelectCard
			},
			{
				label: 'Remove this Plot card',
				optionCallback: this.handleRemoveCard
			}
		];
		return (
			<div className="board-area plot-deck">
				{this.state.isFullscreen && 
					<OverlayCardList
						cards={this.props.cards}
						onDismiss={this.handleToggleFullscreen}
						onSelectCard={this.handleSelectCard}
						label="Select a Plot card from your Plot deck to play"
						viewerLimit={3}
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

export default PlotDeck;