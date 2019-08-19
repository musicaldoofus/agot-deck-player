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
			searchCache: [],
			recentlySearchedCache: [],
			focusDeck: null,
			focusDeckCacheType: 'searchCache'
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
			recentlySearchedCache: this.state.recentlySearchedCache.concat(recentlySearched)
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
		this.setState({searchCache: this.state.searchCache.concat(deck)});
		let recentlySearched = getFromDB('recentlySearched');
		if (recentlySearched === null) recentlySearched = [];
		recentlySearched = recentlySearched.filter(oldDeck => oldDeck.id !== deck.id); //avoid duplicates in cache
		putToDB('recentlySearched', recentlySearched.concat(deck));
	}
	
	handleClickDecklist(deckId, focusDeckCacheType) {
		console.log('got', deckId);
		let focusDeck;
		for (let i = 0; i < this.state[focusDeckCacheType].length; i++) {
			console.log(this.state[focusDeckCacheType][i]);
			if (this.state[focusDeckCacheType][i].id === deckId) focusDeck = i;
		}
		console.log('focusDeck id set to', focusDeck);
		this.setState({focusDeck, focusDeckCacheType});
	}
	
	handleDismiss() {
		this.setState({focusDeck: null});
	}
	
	render() {
		const searchResults = this.state.searchCache.map((deck, i) => (
			<div key={i} id={`search-result-decklist-${deck.id}`}>
				<div>
					<h3>{deck.name}</h3>
					<a href={`https://thronesdb.com/decklist/view/${deck.id}`} target="_blank" rel="noopener noreferrer">Go to decklist page</a>
				</div>
				<CardPileBtn
					imgSrc={factionCardImages[deck.faction_code]}
					onClick={() => this.handleClickDecklist(deck.id, 'searchCache')}
				/>
			</div>
		));
		const recentlySearched = this.state.recentlySearchedCache.map((deck, i) => (
			<div key={i} id={`search-result-decklist-${deck.id}`}>
				<div>
					<h3>{deck.name}</h3>
					<a href={`https://thronesdb.com/decklist/view/${deck.id}`} target="_blank" rel="noopener noreferrer">Go to decklist page</a>
				</div>
				<CardPileBtn
					imgSrc={factionCardImages[deck.faction_code]}
					onClick={() => this.handleClickDecklist(deck.id, 'recentlySearchedCache')}
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
					<div style={{display: 'grid', gridTemplateColumns: `repeat(${this.state.searchCache.length}, 10rem)`}}>
						{this.state.searchCache.length > 0 && searchResults}
					</div>
				</div>
				<div id="recently-searched">
					<h1>Recently searched decklists</h1>
					<div className="decklist-viewer" style={{gridTemplateColumns: `repeat(${this.state.recentlySearchedCache.length}, 10rem)`}}>
						{recentlySearched}
					</div>
				</div>
				{this.state.focusDeck !== null &&
					<OverlayCardList
						label=""
						cards={this.state[this.state.focusDeckCacheType][this.state.focusDeck].cardList}
						onDismiss={this.handleDismiss}
					/>
				}
			</div>
		);
	}
}

export default GetDecks;