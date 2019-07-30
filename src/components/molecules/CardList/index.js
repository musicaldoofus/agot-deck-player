import React, { Component } from 'react';
import { toCard } from '../../atoms/Card';
import getFromAPI from '../../../utils/getFromAPI';
import CardBack from '../../../media/img/card-back.png';
import deepClone from '../../../utils/deepClone';
import './CardList.css';

/*
Definition for CardList
- should only be used when multiple cards can be shown (even if only a single card is passed in props)
- may be shown as child of Overlay i.e. <Overlay><CardList></Overlay>
- must be simplistic with few dependencies
*/

class CardList extends Component {
	constructor(props) {
		super(props);
		const cards = Array.isArray(this.props.cards) ? this.props.cards : Array.from({length: 1}, (_) => this.props.cards);
		this.state = {
			visibleCards: this.updateVisibleParams(0)
		};
	}
	
	componentDidUpdate(...props) {
		console.log('props', props);
	}
	
	updateVisibleParams(startInd) {
		return deepClone(this.props.cards).splice(startInd, startInd + this.props.visibleLength);
	}
	
	handleUpdateVisibleCards(startInd) {
		console.log('handleUpdateVisibleCards');
		this.setState({
			visibleCards: this.updateVisibleParams(startInd)
		});
	}
	
	render() {
		const cardList = this.props.cards.map((cardProps, ind) => toCard({cardProps, ind, onClick: this.props.onClick}));
		console.log('render <CardList>', cardList, this.props);
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