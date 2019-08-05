import React, { Component, Fragment } from 'react';
import Card, { toCard, CardDetails } from '../../atoms/Card';
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
		this.setState({ind: this.state.ind + amt});
	}
	
	render() {
		const viewerStyle = {
			gridTemplateColumns: `repeat(${this.props.cards.length}, ${this.props.colSize}px)`,
			marginLeft: `${-this.props.colSize * this.state.ind}px`
		};
		const props = this.props;
		return (
			<div className="card-list-viewer">
				{this.state.ind > 0 && 
					<div id="left-side-controls">
						<button className="btn viewer-btn left" onClick={() => this.handleIndexUpdate(-1)}>&larr;</button>
					</div>
				}
				<div id="card-list" className="card-list" style={viewerStyle}>
					<PureCardList {...props}/>
				</div>
				<div id="right-side-controls" className="pull-right">
					{this.props.handleFullscreen &&
						<button onClick={this.props.handleFullscreen}>Expand</button>
					}
					{this.props.cards.length >= this.props.viewerLimit && this.state.ind < (this.props.cards.length - 1) && 
						<button className="btn viewer-btn right" onClick={() => this.handleIndexUpdate(1)}>&rarr;</button>
					}
				</div>
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
		this.setState({focusCard});
	}
	
	render() {
		const props = this.props; //allow passthrough props to child component
		const cardProps = this.state.focusCard ? this.state.focusCard : null; //allow passthrough props to child component
		const cardOptionButtons = this.props.cardOptions ?
			this.props.cardOptions.map(
				(o, i) => <button key={i} onClick={() => o.optionCallback(cardProps)}>{o.label}</button>)
			: null;
		return (
			<Overlay>
				<div className="overlay-label">
					<h3>{this.props.label}</h3>
				</div>
				{this.state.focusCard ?(
					<Fragment>
						<div style={{display: 'grid', gridTemplateColumns: '3fr 2fr'}}>
							<Card
								className="focus-card"
								{...cardProps}
							/>
							<div className="card-option-buttons">
								<div className="card-option-buttons">
									<button onClick={this.handleUnfocusCard}>&larr; Back to list</button>
									{cardOptionButtons}
								</div>
								<CardDetails {...cardProps}/>
							</div>
							
						</div>
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
			isFullscreen: false,
			cardStatusList: this.props.cards
		};
		this.handleFullscreen = this.handleFullscreen.bind(this);
		this.handleDismissOverlay = this.handleDismissOverlay.bind(this);
		this.handleClickCard = this.handleClickCard.bind(this);
		this.withStatus = this.withStatus.bind(this);
	}
	
	handleFullscreen() {
		console.log('handleFullscreen');
		this.setState({isFullscreen: true});
	}
	
	handleDismissOverlay() {
		this.setState({isFullscreen: false});
	}
	
	handleClickCard(card, ind) {
		// console.log('got', card, ind);
		const updatedStatus = this.state.cardStatusList[card.cardIndex] === 'knelt' ? 'standing' : 'knelt';
		// console.log('updatedStat', updatedStatus);
		const updatedStatusList = this.state.cardStatusList.slice();
		console.log('updatedStatusList', updatedStatusList);
		updatedStatusList[ind].cardStatus = updatedStatus;
		this.setState({cardStatusList: updatedStatusList});
	}
	
	withStatus(card, i) {
		if (this.state.cardStatusList.length === 0) return;
		return Object.assign({}, card, {cardStatus: this.state.cardStatusList[i], cardIndex: i});
	}
	
	render() {
		const gridStyle = {gridTemplateColumns: `repeat(${this.props.cards.length}, ${this.props.colSize}px)`};
		const props = this.props;
		const cards = this.props.cards.map(this.withStatus);
		return (
			<div className={`board-area ${this.props.areaType}-area`}>
				<div className="card-list area">
					{this.state.isFullscreen &&
						<OverlayCardList
							{...props}
							onDismiss={this.handleDismissOverlay}
						/>
					}
					<CardListViewer
						handleFullscreen={this.handleFullscreen}
						onCardClick={this.handleClickCard}
						cards={cards}
						{...props}
					/>
				</div>
			</div>
		);
	}
}

export default AreaCardList;
export { OverlayCardList };