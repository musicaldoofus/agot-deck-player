import React, { Component } from 'react';
import OverlayCardList from '../OverlayCardList';
import factionCardImages from '../../../helpers/factionCardImages';
import './FactionArea.css';

/*
Display faction card (first item in cards prop)
Conditionally display an agenda card (optional second item in cards list prop)
*/

class FactionArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false
		};
		this.handleToggleFullscreen = this.handleToggleFullscreen.bind(this);
	}
	
	handleToggleFullscreen() {
		this.setState({isFullscreen: !this.state.isFullscreen});
	}
	
	render() {
		return (
			<div className="board-area faction-card">
				<div className="btn" onClick={this.handleToggleFullscreen}>
					{this.props.agenda ? (
							<img src={this.props.agenda.image_url} alt={`${this.props.agenda.label} agenda card`}/>
						) : (
							<img src={factionCardImages[this.props.faction]} alt={`${this.props.faction} ${this.props.agenda ? 'faction' : 'agenda'} card`}/>
						)
					}
				</div>
				{this.state.isFullscreen &&
					<OverlayCardList
						faction={this.props.faction}
						cards={this.props.agenda ? [].concat(this.props.agenda) : []}
						onDismiss={this.handleToggleFullscreen}
						label="View your used Faction and Agenda cards"
					/>
				}
			</div>
		);
	}
}

export default FactionArea;