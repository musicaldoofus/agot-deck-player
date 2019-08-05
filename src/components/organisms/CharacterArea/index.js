import React, { Component } from 'react';
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

const CharacterArea = ({cards}) => (
	<BoardArea
		cards={cards}
		areaType="character"
		label="Select a character to take action"
	/>
);

const LocationArea = ({cards}) => (
	<BoardArea
		cards={cards}
		areaType="location"
		label="Select a location to take action"
	/>
);

export default CharacterArea;
export { LocationArea };