import React, { Component } from 'react';
import OverlayCardList from '../OverlayCardList';
import CardListViewer from '../../molecules/CardListViewer';
import './AreaCardList.css';

class AreaCardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false,
			cardStatusList: this.props.cards.map(c => 'standing')
		};
		this.handleFullscreen = this.handleFullscreen.bind(this);
		this.handleDismissOverlay = this.handleDismissOverlay.bind(this);
		this.handleClickCard = this.handleClickCard.bind(this);
		this.withStatus = this.withStatus.bind(this);
	}
	
	handleFullscreen() {
		this.setState({isFullscreen: true});
	}
	
	handleDismissOverlay() {
		this.setState({isFullscreen: false});
	}
	
	handleClickCard(card, ind) {
		const updatedStatus = this.state.cardStatusList[card.cardIndex] === 'knelt' ? 'standing' : 'knelt';
		const updatedStatusList = this.state.cardStatusList.slice();
		updatedStatusList[ind] = updatedStatus;
		this.setState({cardStatusList: updatedStatusList});
	}
	
	withStatus(card, i) {
		return Object.assign({}, card, {cardStatus: this.state.cardStatusList[i], cardIndex: i});
	}
	
	render() {
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
						cards={cards}
						onCardClick={this.handleClickCard}
						handleFullscreen={this.handleFullscreen}
						colSize={120}
						viewerLimit={5}
					/>
				</div>
			</div>
		);
	}
}

export default AreaCardList;