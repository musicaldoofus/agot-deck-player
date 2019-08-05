import React, { Component, Fragment } from 'react';
import Card, { toCard } from '../../atoms/Card';
import Overlay from '../../molecules/Overlay';
import './PureCardList.css';

const PureCardList = ({cards, onCardClick}) => cards.map((c, i) => toCard({cardProps: c, ind: i, onClick: onCardClick}));

class CardListViewer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ind: 0
		};
	}
	
	handleIndexUpdate(amt) {
		this.setState({ind: this.state.ind + amt}, () => console.log(this.state));
	}
	
	render() {
		const viewerStyle = {
			gridTemplateColumns: `repeat(${this.props.cards.length}, ${this.props.colSize}px)`,
			marginLeft: `${-this.props.colSize * this.state.ind}px`
		};
		const props = this.props;
		return (
			<div className="card-list-viewer" style={viewerStyle}>
				{this.state.ind > 0 && 
					<button className="btn viewer-btn left" onClick={() => this.handleIndexUpdate(-1)}>&larr;</button>
				}
				<PureCardList {...props}/>
				{this.props.cards.length >= this.props.viewerLimit && this.state.ind < (this.props.cards.length - 1) && 
					<button className="btn viewer-btn right" onClick={() => this.handleIndexUpdate(1)}>&rarr;</button>
				}
			</div>
		);
	}
}

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
		this.setState({focusCard}, () => console.log(this.state));
	}
	
	render() {
		const props = this.props;
		const cardProps = this.state.focusCard ? this.state.focusCard : null;
		const cardOptionButtons = this.props.cardOptions ? this.props.cardOptions.map((o, i) => <button key={i} onClick={o.optionCallback}>{o.label}</button>) : null;
		return (
			<Overlay>
				<div className="overlay-label">
					<h3>{this.props.label}</h3>
				</div>
				{this.state.focusCard ?(
					<Fragment>
						<button onClick={this.handleUnfocusCard}>Back</button>
						<Card
							className="focus-card"
							{...cardProps}
						/>
						{cardOptionButtons}
					</Fragment>
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

class AreaCardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false
		};
		this.handleFullscreen = this.handleFullscreen.bind(this);
		this.handleDismissOverlay = this.handleDismissOverlay.bind(this);
	}
	
	handleFullscreen() {
		this.setState({isFullscreen: true});
	}
	
	handleDismissOverlay() {
		this.setState({isFullscreen: false});
	}
	
	render() {
		const gridStyle = {gridTemplateColumns: `repeat(${this.props.cards.length}, ${this.props.colSize}px)`};
		const props = this.props;
		return (
			<div className="card-list area" style={gridStyle}>
				{this.state.isFullscreen &&
					<OverlayCardList
						{...props}
						onDismiss={this.handleDismissOverlay}
					/>
				}
				<CardListViewer {...props}/>
				<div>
					<button onClick={this.handleFullscreen}>Expand</button>
				</div>
			</div>
		);
	}
}

export default AreaCardList;
export { OverlayCardList };