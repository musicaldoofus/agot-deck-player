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
			showDrawOptions: false,
			isFullscreen: false
		};
		this.drawAreaRef = React.createRef();
		this.handleToggleShowOptions = this.handleToggleShowOptions.bind(this);
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
		this.handleShuffle = this.handleShuffle.bind(this);
		this.handleDraw = this.handleDraw.bind(this);
	}
	
	handleToggleShowOptions() {
		this.setState({showDrawOptions: !this.state.showDrawOptions});
	}
	
	handleToggleFullscreen() {
		this.setState({isFullscreen: !this.state.isFullscreen, showDrawOptions: false});
	}
	
	handleShuffle() {
		this.props.handleShuffle();
		this.handleToggleShowOptions();
	}
	
	handleDraw() {
		// this.props.handleDraw();
	}
	
	render() {
		const cardOptions = [];
		return (
			<div ref={this.drawAreaRef} className="board-area draw-pile">
				{this.state.isFullscreen && 
					<OverlayCardList
						cards={this.props.cards}
						onDismiss={this.handleToggleFullscreen}
						onSelectCard={this.handleSelectCard}
						label="Select a Plot card from your Plot deck to play"
						viewerLimit={5}
						cardOptions={cardOptions}
					/>
				}
				<div style={{position: 'relative'}}>
					<CardPileBtn
						isPortrait={true}
						onClick={this.handleToggleShowOptions}
					/>
					{this.state.showDrawOptions &&
						<div className="draw-area-options">
							<button onClick={this.handleToggleFullscreen}>View cards in draw deck</button>
							<button onClick={this.handleShuffle}>Shuffle draw deck</button>
							<button onClick={this.handleDraw}>Draw</button>
						</div>
					}
				</div>
			</div>
		)
	}
}

export default DrawPile;