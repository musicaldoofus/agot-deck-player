import React from 'react';
import cardBackside from '../../../media/card-back.png';
import CardImg from '../CardImg';
import './Card.css';

/*
implementations of Card
- .portrait
- .landscape
- .backside.portrait (DrawDeck, setup cards, duplicate cards,)
- .backside.landscape (PlotArea)
- .portrait.knelt
*/

const Card = (props) => {
	const className = `card${props.card ? ' '.concat(props.card.status) : ''} ${props.isLandscape ? 'landscape' : 'portrait'}${props.isBackside ? ' backside' : ''}${props.className ? ' '.concat(props.className) : ''}`
	return (
		<div
			className={className}
			onClick={props.onClick}
			onPress={props.onPress}
			onContextMenu={props.onContextMenu}
		>
			<CardImg
				src={props.isBackside ? cardBackside : props.card.image_url}
			/>
		</div>
	);
}

export default Card;