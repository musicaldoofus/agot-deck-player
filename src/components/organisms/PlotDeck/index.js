import React, { Component } from 'react';
import CardPileBtn from '../../atoms/CardPileBtn';
import Overlay from '../../molecules/Overlay';
import CardList from '../../molecules/CardList';
import './PlotDeck.css';

class PlotDeck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false,
			focusCard: null
		};
		this.handleCardOnClick = this.handleCardOnClick.bind(this);
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
	}
	
	handleToggleFullscreen() {
		this.setState({
			isFullscreen: !this.state.isFullscreen,
			focusCard: null
		});
	}
	
	handleCardOnClick(c) {
		if (!c) this.setState({
			focusCard: null
		});
		else this.setState({
			focusCard: [].concat(c)
		});
	}
	
	render() {
		const cards = this.state.focusCard ? this.state.focusCard : this.props.cards;
		console.log('cards', cards);
		return (
			<div className="board-area plot-deck">
				{this.state.isFullscreen ? (
					<Overlay>
						<div className="card-list-container">
							<div>
								<button onClick={this.handleToggleFullscreen}>Back</button>
							</div>
							{this.state.focusCard &&
								<button onClick={() => this.handleCardOnClick()}>Show all plot cards</button>
							}
							<CardList visibleLength={4} cards={cards} onClick={this.handleCardOnClick}/>
						</div>
					</Overlay>
				) : (
					<CardPileBtn onClick={this.handleToggleFullscreen}/>
				)}
			</div>
		)
	}
}

export default PlotDeck;