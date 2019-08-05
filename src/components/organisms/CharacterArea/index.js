import React from 'react';
import AreaCardList from '../../molecules/PureCardList'
import './CharacterArea.css';
	
const BoardArea = ({cards, areaType, label}) =>  {
	return (
			<AreaCardList
				areaType={areaType}
				cards={cards}
				viewerLimit={areaType === 'plot' ? 3 : 5}
				colSize={areaType === 'plot' ? 240 : 120}
				label={label}
			/>
	);
};

const CharacterArea = (props) => (
	<BoardArea
		areaType="character"
		label="Select a character to take action"
		{...props}
	/>
);

const LocationArea = (props) => (
	<BoardArea
		areaType="location"
		label="Select a location to take action"
		{...props}
	/>
);

export default CharacterArea;
export { LocationArea };