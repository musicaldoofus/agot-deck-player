import React from 'react';
import ReactMarkdown from 'react-markdown';
import intrigueIcon from '../../../media/intrigue-icon.png';
import militaryIcon from '../../../media/intrigue-icon.png';
import powerIcon from '../../../media/intrigue-icon.png';
import './CardDetails.css';

const CharacterCardDetails = ({faction_name, is_loyal, cost, strength, type_name, is_intrigue, is_power, is_military, traits, text}) => (
	<div className="character-details">
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
		{traits &&
			<div>
				<p>
					<b><em>{traits}</em></b>
				</p>
			</div>
		}
		{text &&
			<div>
				<ReactMarkdown
					source={text}
					escapeHtml={false}
				/>
			</div>
		}
	</div>
);

const AgendaCardDetails = ({faction_name, traits, text}) => (
	<div className="agenda-details">
		<div>
			<p>{faction_name}</p>
		</div>
		<div>
			<p><b>Agenda.</b></p>
		</div>
		<div>
			<p><b>{traits}</b></p>
		</div>
		<div>
			<p>{text}</p>
		</div>
	</div>
);

const PlotCardDetails = ({income, initiative, claim, reserve, deck_limit, traits, text}) => {
	console.log(text);
	return (
		<div className="plot-details">
			<div id="plot-card-stats">
				<p>
					<b>Plot.</b>
					Income: {income}. Initiative: {initiative}. Claim: {claim}. Reserve: {reserve}.{deck_limit > 0 ? ` Plot deck limit: ${deck_limit}` : null}
				</p>
			</div>
			<div id="plot-card-traits">
				<p>{traits}</p>
			</div>
			<div id="plot-card-text">
				<ReactMarkdown
					source={text}
					escapeHtml={false}
				/>
			</div>
		</div>
	);
}

const LocationCardDetails = ({faction_name, cost, traits, is_limited, text}) => (
	<div className="location-details">
		<div>
			{faction_name}
		</div>
		<div>
			{cost}
		</div>
		<div>
			{traits}
		</div>
		<div>
			{text}
		</div>
	</div>
);

const AttachmentCardDetails = ({faction_name, cost, traits, text}) => (
	<div className="attachment-details">
		<div>
			{faction_name}
		</div>
		<div>
			{cost}
		</div>
		<div>
			{traits}
		</div>
		<div>
			{text}
		</div>
	</div>
);

const CardDetails = ({type_code, label, url, ...rest}) => (
	<div className="card-details">
		<div>
			<h3>{label}</h3>
		</div>
		{type_code === 'character' && <CharacterCardDetails {...rest}/>}
		{type_code === 'agenda' && <AgendaCardDetails {...rest}/>}
		{type_code === 'plot' && <PlotCardDetails {...rest}/>}
		{type_code === 'location' && <LocationCardDetails {...rest}/>}
		{type_code === 'attachment' && <AttachmentCardDetails {...rest}/>}
		<div>
			<p><a href={url} rel="noopener noreferrer" target="_blank">Go to card page.</a></p>
		</div>
	</div>
);

export default CardDetails;