import React from 'react';
import Button from '../Button';

const CardOptionsButton = (props, cardProps) => {
	return (
		<Button
			key={props.label}
			onClick={() => props.optionCallback(cardProps)}
			title={props.label}
		/>
	);
}

export default CardOptionsButton;