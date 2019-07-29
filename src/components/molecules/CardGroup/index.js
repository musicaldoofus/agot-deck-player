import React from 'react';
import { toCard } from '../../atoms/Card';
import getFromAPI from '../../../utils/getFromAPI';
import './CardGroup.css';

class CardGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};
		this.success = this.success.bind(this);
		this.failure = this.failure.bind(this);
		this.props.cards
			.forEach(id => getFromAPI({type: 'card', id})
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
			<div className="card-group">
				{cardList}
			</div>
		);
	}
}

export default CardGroup;