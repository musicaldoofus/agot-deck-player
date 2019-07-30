import React from 'react';
import CardBack from '../../../media/img/card-back.png';
import './Card.css';

const Card = (props) => {
	const { code, url, onClick, name, image_url, cardStatus, classNames } = props;
	console.log(code, url, onClick, name, image_url, cardStatus, classNames);
	return (
		<div onClick={() => onClick(props)} className={`card ${cardStatus}${classNames ? ' ' + classNames : ''}`}>
			<img alt={name} src={cardStatus === 'knelt' ? CardBack : image_url}/>
			<a href={url} target="_blank" rel="noopener noreferrer">Card page</a>
		</div>
	);
}

const toCard = ({cardProps, ind, onClick}) => <Card key={cardProps.code + '-' + ind} {...cardProps} onClick={onClick}/>;

export default Card;
export { toCard };