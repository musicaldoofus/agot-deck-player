import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Overlay from '../../molecules/Overlay';
import FocusCard from '../../atoms/FocusCard';
import Alert from '../../atoms/Alert';
import CardListViewer from '../../molecules/CardListViewer';

class OverlayCardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusCard: null,
			focusDeck: false
		};
		this.handleDismiss = this.handleDismiss.bind(this);
		this.handleFocusCard = this.handleFocusCard.bind(this);
		this.handleUnfocusCard = this.handleUnfocusCard.bind(this);
		this.handleSelectDeck = this.handleSelectDeck.bind(this);
		this.handleDismissDeckAlert = this.handleDismissDeckAlert.bind(this);
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
	
	handleSelectDeck() {
		this.setState({
			focusDeck: true
		}, this.props.handleSelectDeck);
	}
	
	handleDismissDeckAlert() {
		this.setState({focusDeck: false});
	}
	
	render() {
		const props = this.props; //allow passthrough props to child component
		const cardProps = this.state.focusCard ? this.state.focusCard : null; //allow passthrough props to child component
		return (
			<Overlay>
				<div className="overlay-label">
					<h3>{this.props.label}</h3>
				</div>
				{this.props.handleSelectDeck && 
					<Fragment>
						<button className="btn" onClick={this.handleSelectDeck}>Select this deck</button>
						<button className="btn" onClick={this.handleAddToMyDecks}>Add to My Decks</button>
					</Fragment>
				}
				{this.state.focusCard && 
					<FocusCard
						cardProps={cardProps}
						cardOptions={this.props.cardOptions}
						handleUnfocusCard={this.handleUnfocusCard}
					/>
				}
				<CardListViewer
					{...props}
					onCardClick={this.handleFocusCard}
					colSize={240}
				/>
				<button className="dismiss-btn" onClick={this.handleDismiss}>Dismiss</button>
				{this.state.focusDeck && 
					<Alert
						handleDismiss={this.handleDismissDeckAlert}
					>
						<div>
							<p>Loaded this deck!</p>
						</div>
						<div>
							<Link to="/play">Play this deck</Link>
						</div>
					</Alert>
				}
			</Overlay>
		);
	}
}

export default OverlayCardList;