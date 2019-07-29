import React, { Component } from 'react';
import { toCard } from '../../atoms/Card';
import getFromAPI from '../../../utils/getFromAPI';
import './CardList.css';

const CardList = ({cards, onClick, classNames}) => {
	// console.log('render <CardList>', cards);
	cards = Array.isArray(cards) ? cards : Array.from(1, (_) => cards); //handle potential single Card objects being passed instead of a list
	const cardList = cards.map((cardProps, ind) => toCard({cardProps, ind, onClick: onClick}));
	return (
		<div className={`card-list${classNames ? ' ' + classNames : ''}`}>
			{cardList}
		</div>
	);
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