import React from 'react';
import './Card.css';

const Card = (c) => (
	<div className="card">
		<img alt={c.name} src={c.image_url}/>
	</div>
)

const toCard = (c) => <Card key={c.code} {...c}/>;

export default Card;
export { toCard };