import React from 'react';
import './Overlay.css';

const Overlay = ({children}) => (
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-inner-container">
				{children}
			</div>
		</div>
	</div>
);

export default Overlay;