import React, { useEffect } from 'react';
import './Page.css';

const Page = (props) => {
	useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
	}, []);
	
	return (
		<div className={`page${props.className ? ' '.concat(props.className) : ''}`}>
			{props.children}
		</div>
	);
}

export default Page;