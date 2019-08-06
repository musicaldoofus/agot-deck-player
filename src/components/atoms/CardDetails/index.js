import React from 'react';
import intrigueIcon from '../../../media/intrigue-icon.png';
import militaryIcon from '../../../media/intrigue-icon.png';
import powerIcon from '../../../media/intrigue-icon.png';

const CharacterCardDetails = ({faction_name, is_loyal, cost, strength, type_name, is_intrigue, is_power, is_military, traits, text}) => (
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
		{traits &&
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

const AgendaCardDetails = ({label, faction_name, traits, text}) => (
	<div id="card-data" className="card-data">
		<div>
			<h3>{label}</h3>
		</div>
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

const PlotCardDetails = ({label, income, initiative, claim, reserve, deck_limit, traits, text}) => (
	<div id="card-data" className="card-data">
		<div id="plot-card-label">
			<h3>{label}</h3>
		</div>
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
			{text ? text: null}
		</div>
	</div>
);

const LocationCardDetails = ({}) => (
	<div id="card-data" className="card-data">
		<div>
		
		</div>
		<div>
		
		</div>
		<div>
		
		</div>
		<div>
		
		</div>
	</div>
);

const AttachmentCardDetails = ({}) => (
	<div id="card-data" className="card-data">
		
	</div>
);

const CardDetails = ({type_code, label, ...rest}) => (
	<div className="card-data" id="card-data">
		<div>
			<h3>{label}</h3>
		</div>
		{type_code === 'character' && <CharacterCardDetails {...rest}/>}
		{type_code === 'agenda' && <AgendaCardDetails {...rest}/>}
		{type_code === 'plot' && <PlotCardDetails {...rest}/>}
		{type_code === 'location' && <LocationCardDetails {...rest}/>}
		{type_code === 'attachment' && <AttachmentCardDetails {...rest}/>}
	</div>
);

export default CardDetails;