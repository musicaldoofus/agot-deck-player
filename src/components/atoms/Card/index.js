import React from 'react';
// import CardBack from '../../../media/img/card-back.png';
import './Card.css';

const Card = (props) => {
	const { onClick, name, image_url, cardStatus, className } = props;
	return (
		<div onClick={onClick ? () => onClick(props) : () => {}} className={`card${className ? ' ' + className : ''}`}>
			<img alt={name} src={image_url}/>
		</div>
	);
}

const toCard = ({cardProps, ind, onClick}) => <Card key={cardProps.code + '-' + ind} ind={ind} {...cardProps} onClick={onClick}/>;

export default Card;
export { toCard };