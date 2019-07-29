import React from 'react';
import './TokenButton.css';

const TokenButton = ({onClick, label, children}) => (
	<button onClick={onClick}>{label ? label : children}</button>
);

export default TokenButton;