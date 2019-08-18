import React from 'react';
import Card from '../Card';
import CardDetails from '../CardDetails';
import './FocusCard.css';

const FocusCard = ({cardProps, cardOptions, handleUnfocusCard}) => {
	const cardOptionButtons = cardOptions ?
		cardOptions.map(
			(o, i) => <button key={i} onClick={() => o.optionCallback(cardProps)}>{o.label}</button>)
		: null;
	return (
		<div className="focus-card-container">
			<Card
				{...cardProps}
			/>
			<div className="card-option-buttons">
				<div className="card-option-buttons">
					<button onClick={handleUnfocusCard}>&larr; Back to list</button>
					{cardOptionButtons}
				</div>
				<CardDetails {...cardProps}/>
			</div>
		</div>
	);
}

export default FocusCard;