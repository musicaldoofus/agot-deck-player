import React, { Component } from 'react';
import CardPileBtn from '../../atoms/CardPileBtn';
import { OverlayCardList } from '../../molecules/PureCardList';
import './DiscardPile.css';

class DiscardPile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false
		};
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
	}
	
	handleToggleFullscreen() {
		this.setState({isFullscreen: !this.state.isFullscreen});
	}
	
	render() {
		const lastInd = this.props.cards.length > 0 ? this.props.cards.length - 1 : 0;
		const mostRecentCard = this.props.cards[lastInd];
		return (
			<div className={`board-area discard-pile${this.props.cards.length === 0 ? ' empty' : ''}`}>
				{this.props.cards.length > 0 &&
					<CardPileBtn
						imgSrc={mostRecentCard.image_url && mostRecentCard.image_url}
						onClick={this.handleToggleFullscreen}
					/>
				}
				{this.state.isFullscreen &&
					<OverlayCardList
						cards={this.props.cards}
						onDismiss={this.handleToggleFullscreen}
						label="View cards in your discard pile"
						viewerLimit={5}
					/>
				}
			</div>
		);
	}
}

export default DiscardPile;