import React from 'react';
import './Alert.css';

const Alert = (props) => {
	return (
		<div className="alert-container">
			<div className="alert">
				{props.children}
				<button onClick={props.handleDismiss}>Dismiss</button>
			</div>
		</div>
	);
}

export default Alert;