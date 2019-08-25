import React from 'react';
import CardBack from '../../../media/card-back.png';
import './CardPileBtn.css';

const CardPileBtn = ({onClick, imgSrc, isPortrait}) => {
	return (
		<div className={`btn card-pile-btn ${isPortrait ? 'portrait' : 'landscape'}`} onClick={onClick}>
			<img alt="pile of cards" src={imgSrc ? imgSrc : CardBack}/>
		</div>
	);
}

export default CardPileBtn;