import React from 'react';
import intrigueIcon from '../../../media/intrigue-icon.png'
import militaryIcon from '../../../media/intrigue-icon.png'
import powerIcon from '../../../media/intrigue-icon.png'
import './Card.css';

const Card = (props) => {
	const { ind, onClick, name, image_url, cardStatus, className } = props;
	console.log('<Card>', props);
	return (
		<div onClick={onClick ? () => onClick(props, ind) : () => {}} className={`card${cardStatus ? ' ' + cardStatus : ''}${className ? ' ' + className : ''}`}>
			<img alt={name} src={image_url}/>
		</div>
	);
}

const toCard = ({cardProps, ind, onClick}) => <Card key={cardProps.code + '-' + ind} ind={ind} {...cardProps} onClick={onClick}/>;

const CardDetails = ({faction_name, is_loyal, cost, strength, type_name, is_intrigue, is_power, is_military, traits, text}) => {
	return (
		<div id="card-data" className="card-data">
			<div>
				<p>{faction_name}. {is_loyal ? 'Loyal' : 'Non-loyal'}.</p>
			</div>
			<div>
				<p>
					<b>{type_name}.</b>
					Cost: {cost}.
					STR: {strength}
					{is_intrigue && <img alt="This character card includes an intrigue icon" src={intrigueIcon}/>}
					{is_power && <img alt="This character card includes a power icon" src={powerIcon}/>}
					{is_military && <img alt="This character card includes a military icon" src={militaryIcon}/>}
				</p>
			</div>
			{traits && traits.length > 0 &&
				<div>
					<p>
						<b><em>{traits}</em></b>
					</p>
				</div>
			}
			{text &&
				<div>
					{text}
				</div>
			}
		</div>
	);
}

export default Card;
export { toCard, CardDetails };