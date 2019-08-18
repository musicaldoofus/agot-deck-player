import React, { Component } from 'react';
import Overlay from '../../molecules/Overlay';
import FocusCard from '../../atoms/FocusCard';
import CardListViewer from '../../molecules/CardListViewer';

class OverlayCardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusCard: null
		};
		this.handleDismiss = this.handleDismiss.bind(this);
		this.handleFocusCard = this.handleFocusCard.bind(this);
		this.handleUnfocusCard = this.handleUnfocusCard.bind(this);
	}
	
	handleDismiss() {
		this.props.onDismiss();
	}
	
	handleUnfocusCard() {
		this.setState({focusCard: null});
	}
	
	handleFocusCard(focusCard) {
		this.setState({focusCard});
	}
	
	render() {
		const props = this.props; //allow passthrough props to child component
		const cardProps = this.state.focusCard ? this.state.focusCard : null; //allow passthrough props to child component
		// const cardOptionButtons = this.props.cardOptions ?
			// this.props.cardOptions.map(
				// (o, i) => <button key={i} onClick={() => o.optionCallback(cardProps)}>{o.label}</button>)
			// : null;
		return (
			<Overlay>
				<div className="overlay-label">
					<h3>{this.props.label}</h3>
				</div>
				{this.state.focusCard ? (
					<FocusCard
						cardProps={cardProps}
						cardOptions={this.props.cardOptions}
						handleUnfocusCard={this.handleUnfocusCard}
					/>
					) : (
					<CardListViewer
						{...props}
						onCardClick={this.handleFocusCard}
						colSize={240}
					/>
				)}
				<button className="dismiss-btn" onClick={this.handleDismiss}>Dismiss</button>
			</Overlay>
		);
	}
}

export default OverlayCardList;