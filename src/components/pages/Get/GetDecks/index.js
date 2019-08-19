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
			recentlySearchedLimit: 0,
			focusDeck: null,
			startingFocusIndex: 0
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.updateDecklistCache = this.updateDecklistCache.bind(this);
		this.handleClickDecklist = this.handleClickDecklist.bind(this);
		this.handleDismiss = this.handleDismiss.bind(this);
	}
	
	componentDidMount() {
		const recentlySearched = getFromDB('recentlySearched');
		this.setState({
			decklistCache: this.state.decklistCache.concat(recentlySearched),
			recentlySearchedLimit: recentlySearched.length
		});
	}
	
	handleInputChange(e) {
		this.setState({searchInput: e.target.value});
	}
	
	handleSearch(e) {
		e.preventDefault();
		getDeckFromAPI({id: this.state.searchInput}, this.updateDecklistCache);
	}
	
	updateDecklistCache(deck) {
		this.setState({decklistCache: this.state.decklistCache.concat(deck)});
		let recentlySearched = getFromDB('recentlySearched');
		if (recentlySearched === null) recentlySearched = [];
		recentlySearched = recentlySearched.filter(oldDeck => oldDeck.id !== deck.id); //avoid duplicates in cache
		putToDB('recentlySearched', recentlySearched.concat(deck));
	}
	
	handleClickDecklist(deckId) {
		console.log('got', deckId);
		let focusDeck;
		for (let i = 0; i < this.state.decklistCache.length; i++) {
			console.log(this.state.decklistCache[i]);
			if (this.state.decklistCache[i].id === deckId) focusDeck = i;
		}
		console.log('focusDeck id set to', focusDeck);
		this.setState({focusDeck});
	}
	
	handleDismiss() {
		this.setState({focusDeck: null});
	}
	
	render() {
		const newResults = this.state.decklistCache.slice(this.state.recentlySearchedLimit, this.state.decklistCache.length - 1);
		const oldResults = this.state.decklistCache.slice(0, this.state.recentlySearchedLimit);
		const deckListResults = newResults.map((deck, i) => (
			<div key={i} id={`search-result-decklist-${deck.id}`}>
				<CardPileBtn
					imgSrc={factionCardImages[deck.faction_code]}
					onClick={() => this.handleClickDecklist(deck.id)}
				/>
			</div>
		));
		const recentlySearched = oldResults.map((deck, i) => (
			<div key={i} id={`search-result-decklist-${deck.id}`}>
				<CardPileBtn
					imgSrc={factionCardImages[deck.faction_code]}
					onClick={() => this.handleClickDecklist(deck.id)}
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
				<div id="search-results">
					<h1>Decklist search results</h1>
					<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, auto)'}}>
						{this.state.decklistCache.length > 0 && deckListResults}
					</div>
				</div>
				<div id="recently-searched">
					<h1>Recently searched decklists</h1>
					<div className="decklist-viewer" style={{gridTemplateColumns: `repeat(${oldResults.length}, ${oldResults.length === 1 ? '120px' : 'auto'})`}}>
						{recentlySearched}
					</div>
				</div>
				{this.state.focusDeck !== null &&
					<OverlayCardList
						label=""
						cards={this.state.decklistCache[this.state.focusDeck].cardList}
						onDismiss={this.handleDismiss}
					/>
				}
			</div>
		);
	}
}

export default GetDecks;