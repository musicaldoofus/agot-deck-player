import React from 'react';
import CardBack from '../../../media/img/card-back.png';
import './CardPileBtn.css';

const CardPileBtn = ({onClick}) => {
	return (
		<div className="btn card-pile-btn" onClick={onClick}>
			<img alt="pile of cards" src={CardBack}/>
		</div>
	);
}

export default CardPileBtn;