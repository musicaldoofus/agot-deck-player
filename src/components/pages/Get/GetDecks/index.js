import React, { Component } from 'react';
import CardPileBtn from '../../../atoms/CardPileBtn';
import OverlayCardList from '../../../organisms/OverlayCardList';
import getDeckFromAPI from '../../../../helpers/getFromAPI';
import putToDB, { getFromDB } from '../../../../helpers/putToDB';
import factionCardImages from '../../../../helpers/factionCardImages';
import './GetDecks.css';

class GetDecks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: '',
			decklistCache: [],
			focusDeck: null,
			startingFocusIndex: 0
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSearchCallback = this.handleSearchCallback.bind(this);
		this.handleClickDecklist = this.handleClickDecklist.bind(this);
	}
	
	componentDidMount() {
		//load recently searched decks from DB
		const recentlySearched = getFromDB('recentlySearched');
		//get default decks to browse (extend via search API from thronesDB)
		
		//add to this.state.decklistCache
	}
	
	handleInputChange(e) {
		this.setState({searchInput: e.target.value});
	}
	
	handleSearch(e) {
		e.preventDefault();
		getDeckFromAPI({id: this.state.searchInput}, this.handleSearchCallback);
	}
	
	handleSearchCallback(deck) {
		this.setState({decklistCache: this.state.decklistCache.concat(deck)});
		let recentlySearched = getFromDB('recentlySearched');
		if (recentlySearched === null) recentlySearched = [];
		recentlySearched = recentlySearched.filter(oldDeck => oldDeck.id !== deck.id); //avoid duplicates in cache
		putToDB('recentlySearched', recentlySearched.concat(deck));
	}
	
	handleClickDecklist(focusDeck) {
		this.setState({focusDeck});
	}
	
	render() {
		const deckListResults = this.state.decklistCache.map((deck, i) => (
			<div key={i} id={`search-result-decklist-${deck.id}`}>
				<CardPileBtn
					imgSrc={factionCardImages[deck.faction_code]}
					onClick={() => this.handleClickDecklist(i)}
				/>
			</div>
		));
		return (
			<div className="get-decks">
				<form>
					<label htmlFor="deck-search">
						<input
							name="deck-search"
							type="text"
							placeholder="Search for decklist by id"
							value={this.state.searchInput}
							onChange={this.handleInputChange}
						/>
					</label>
					<button type="submit" onClick={this.handleSearch}>Search</button>
				</form>
				<div id="search-results" style={{display: 'grid', gridTemplateColumns: 'repeat(3, auto)'}}>
					{this.state.decklistCache.length > 0 && deckListResults}
				</div>
				{this.state.focusDeck !== null &&
					<OverlayCardList
						cards={this.state.decklistCache[this.state.focusDeck].cardList}
					/>
				}
			</div>
		);
	}
}

export default GetDecks;