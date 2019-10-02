import React from 'react';
import cardBackside from '../../../media/card-back.png';
import './CardImg.css';

const CardImg = (props) => {
	return (
		<div className="card-img">
			<img src={props.isBackside ? cardBackside : props.src} alt=""/>
		</div>
	);
}

export default CardImg;