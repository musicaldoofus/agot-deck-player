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
	return (
		<div
			className={`card${props.isKnelt ? ' knelt' : ''}${props.isLandscape ? ' landscape' : ' portrait'}${props.isBackside ? ' backside' : ''}`}
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