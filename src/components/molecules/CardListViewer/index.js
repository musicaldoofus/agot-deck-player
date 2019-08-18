import React, { Component } from 'react';
import { toCard } from '../../atoms/Card';
import './CardListViewer.css';

const PureCardList = ({cards, onCardClick}) => {
	return cards.map((c, i) => toCard({cardProps: c, ind: i, onClick: onCardClick}));
}

class CardListViewer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusCardListType: null,
			ind: 0
		};
	}
	
	handleIndexUpdate(amt) {
		this.setState({ind: this.state.ind + amt});
	}
	
	render() {
		// console.log('<CardListViewer> render', this.props);
		const viewerStyle = {
			gridTemplateColumns: `repeat(${this.props.cards.length}, ${this.props.colSize}px)`,
			marginLeft: `${-this.props.colSize * this.state.ind}px`
		};
		return (
			<div className="card-list-viewer">
				{this.state.ind > 0 && 
					<div id="left-side-controls">
						<button className="btn viewer-btn left" onClick={() => this.handleIndexUpdate(-1)}>&larr;</button>
					</div>
				}
				<div id="card-list" className="card-list" style={viewerStyle}>
					<PureCardList cards={this.props.cards} onCardClick={this.props.onCardClick}/>
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

export default CardListViewer;