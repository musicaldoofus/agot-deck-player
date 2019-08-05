import React, { Component } from 'react';
import { toCard } from '../../atoms/Card';
import getFromAPI from '../../../helpers/getFromAPI';
import CardBack from '../../../media/img/card-back.png';
import deepClone from '../../../helpers/deepClone';
import './CardList.css';

class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusCard: this.props.cards.length > 1 ? null : this.props.cards[0],
			visibleCards: this.updateVisibleParams(0)
		};
		this.renderCardOptionButton = this.renderCardOptionButton.bind(this);
	}
	
	validateCardsArray() {
		const cardsArray = Array.isArray(this.props.cards) ? this.props.cards : Array.from({length: 1}, (_) => this.props.cards);
		return cardsArray.map(c => Object.assign(c, {cardStatus: this.props.defaultCardStatus}))
	}
	
	updateVisibleParams(startInd) {
		return deepClone(this.validateCardsArray()).splice(startInd, startInd + this.props.visibleLength);
	}
	
	handleUpdateVisibleCards(startInd) {
		this.setState({
			visibleCards: this.updateVisibleParams(startInd)
		});
	}
	
	renderCardOptionButton(b, i) {
		return <button key={b.label + i} {...b}>{b.label}</button>
	}
	
	handleFocusCard(focusCard) {
		this.setState({focusCard});
	}
	
	render() {
		const visibleCardList = this.state.focusCard ? this.state.focusCard : this.props.cards;
		const cardList = visibleCardList.map((cardProps, ind) => toCard({cardProps, ind, onClick: this.props.onCardClick ? this.props.onCardClick : this.handleFocusCard}));
		// const optionButtons = this.props.cardOptions.map(this.toCardOptionButton);
		return (
			<div className={`card-list${this.props.classNames ? ' ' + this.props.classNames : ''}`}>
				{cardList}
			</div>
		);
	}
}

//this class is designed for (listOfCodesToQuery) => (manipulatedDisplayOfAPIResults)
class CardListAsync extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};
		this.success = this.success.bind(this);
		this.failure = this.failure.bind(this);
		const cards = Array.isArray(this.props.cards) ? this.props.cards : Array.from(1, (_) => this.props.cards); //handle potential single Card objects being passed instead of a list
		cards.forEach(id => getFromAPI({type: 'card', id})
			.then(this.success)
			.catch(this.failure)
		);
	}
	
	success(data) {
		const d = JSON.parse(data);
		const cards = this.state.cards.slice().concat(d);
		this.setState({cards});
	}
	
	failure(data) {
		console.error('err', data);
	}

	render() {
		const cardList = this.state.cards.map(toCard);
		return (
			<div className={`card-list${this.props.classNames ? ' ' + this.props.classNames : ''}`}>
				{cardList}
			</div>
		);
	}
}

export default CardList;
export { CardListAsync };