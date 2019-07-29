import React from 'react';
import './Card.css';

const Card = (c) => {
	const toCardPage = `https://thronesdb.com/card/${c.code}`;
	return (
		<div className="card">
			<img alt={c.name} src={c.image_url}/>
			<a href={toCardPage} target="_blank" rel="noopener noreferrer">Card page</a>
		</div>
	);
}

const toCard = ({cardProps, ind, onClick}) => <Card key={cardProps.code + '-' + ind} {...cardProps} onClick={onClick}/>;

export default Card;
export { toCard };