import React from 'react';
import './Overlay.css';

const Overlay = ({children}) => (
	<div className="overlay-container">
		<div className="overlay">
			{children}
		</div>
	</div>
);

export default Overlay;