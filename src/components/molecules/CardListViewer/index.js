import React, { Component } from 'react';
import { toCard } from '../../atoms/Card';
import './CardListViewer.css';

const PureCardList = ({cards, onCardClick}) => {
	return cards.map((c, i) => toCard({cardProps: c, ind: i, onClick: onCardClick}));
}

class CardListViewer extends Component {
	constructor(props) {
		super(props);
		this.hasTypes = !Array.isArray(this.props.cards);
		this.state = {
			focusCardListType: this.hasTypes ? Object.keys(this.props.cards)[0] : null,
			ind: 0
		};
		this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
	}
	
	handleFilterUpdate(focusCardListType) {
		this.setState({focusCardListType});
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
		const viewableCardList = this.hasTypes ? this.props.cards[this.state.focusCardListType] : this.props.cards;
		return (
			<div className="card-list-viewer">
				{this.state.ind > 0 && 
					<div id="left-side-controls">
						<button className="btn viewer-btn left" onClick={() => this.handleIndexUpdate(-1)}>&larr;</button>
					</div>
				}
				{this.hasTypes &&
					<div id="card-list-filters">
						{Object.keys(this.props.cards)
							.map((type, i) => (
								<button
									key={i}
									onClick={() => this.handleFilterUpdate(type)}
								>
									{type.charAt(0).toUpperCase().concat(type.substring(1))}
								</button>
							))
						}
					</div>
				}
				<div id="card-list" className="card-list" style={viewerStyle}>
					<PureCardList cards={viewableCardList} onCardClick={this.props.onCardClick}/>
				</div>
				<div id="right-side-controls" className="pull-right">
					{this.props.handleFullscreen &&
						<button onClick={this.props.handleFullscreen}>Expand</button>
					}
					{viewableCardList.length >= this.props.viewerLimit && this.state.ind < (viewableCardList.length - 1) && 
						<button className="btn viewer-btn right" onClick={() => this.handleIndexUpdate(1)}>&rarr;</button>
					}
				</div>
			</div>
		);
	}
}

export default CardListViewer;