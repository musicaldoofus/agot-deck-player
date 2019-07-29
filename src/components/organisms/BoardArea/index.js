import React, { Component } from 'react';
import './BoardArea.css';

/*
accepts props: 
{
	label: '',
	children: {},
	...rest
}
*/

class BoardArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFullscreen: false
		};
		this.handleFullscreenToggle = this.handleFullscreenToggle.bind(this);
	}
	
	handleFullscreenToggle() {
		this.setState({isFullscreen: !this.state.isFullscreen});
	}
	
	render() {
		// console.log('render <BoardArea>', this.props);
		return (
			<div className={`board-area ${this.props.label.split(' ').join('-')}`}>
				<p>{this.props.label}</p>
				<div id="expand-btn-div">
					<button onClick={this.handleFullscreenToggle}>full scr</button>
				</div>
				<div>
					{this.props.children}
				</div>
				{this.state.isFullscreen &&
					<div className="overlay">
						<div id="close-btn-div">
							<button onClick={this.handleFullscreenToggle}>dismiss</button>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default BoardArea;