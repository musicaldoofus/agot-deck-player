import React from 'react';
import CardBack from '../../../media/card-back.png';
import './CardPileBtn.css';

const CardPileBtn = ({onClick, imgSrc}) => {
	return (
		<div className="btn card-pile-btn" onClick={onClick}>
			<img alt="pile of cards" src={imgSrc ? imgSrc : CardBack}/>
		</div>
	);
}

export default CardPileBtn;