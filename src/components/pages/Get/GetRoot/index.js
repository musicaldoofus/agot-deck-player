import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../../../atoms/SearchInput';
import Button from '../../../atoms/Button';
import NoResults from '../../../atoms/NoResults';
import UiCard from '../../../atoms/UiCard';
import { getAllDecksLocal } from '../../../../helpers/getItems';

class GetRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            searchResults: null
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
        this.renderResult = this.renderResult.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleSearchInput() {
        //console.log(`searching for ${this.state.inputValue}`);
        /*
        - sanitize into thronesdb API-friendly query string
        - display query string in search bar via setState
        */
    }

    handleSearchReturned(data) {
        //console.log('returned', typeof data, data);
        this.setState({
            searchResults: JSON.parse(data) //check specific level within return data for multiple decklists
        });
    }

    renderResult(result) {
        console.log('renderResult', result);
        const type = result.hasOwnProperty('slots') || result.hasOwnProperty('cards') ? 'decks' : 'cards';
        return (
            <Link key={result.id} to={`${this.props.match.url}/${type}/${result.id}`}>
                <UiCard className="get-result-deck-link">
                    {result.name}
                </UiCard>
            </Link>
        );
    }

    renderResults(results) {
        console.log('renderResults', results);
        let memo = [];
        return results
            .filter((r) => {
                //console.log('checking', r);
                const isInMemo = memo.indexOf(r.id) === -1;
                memo.push(r.id);
                return isInMemo;
            })
            .map(this.renderResult);
    }

    renderSearchResults(results) {
        if (!results) return undefined;
        const decks = results.filter(r => r.type === 'deck');
        const cards = results.filter(r => r.type === 'card');
        return [decks, cards].map(this.renderResults);
    }

    render() {
        const results = this.renderSearchResults(this.state.searchResults);
        const recentlySearched = this.renderResults(getAllDecksLocal());
        return (
            <div className="get-root">
                <header>
                    <h1>Get decks and cards</h1>
                </header>
                <div className="search">
                    <SearchInput
                        id="get-search-input"
                        value={this.state.inputValue}
                        handleOnChange={this.handleOnChange}
                    />
                    <Button
                        title="Search"
                        onClick={this.handleSearchInput}
                    />
                </div>
                <div className="search-results-container">
                    {(results && results.length > 0) ? results : <NoResults/>}
                </div>
                {recentlySearched && recentlySearched.length > 0 && (
                    <div className="search-results-recent">
                        <h2>Recently searched decks</h2>
                        {recentlySearched}
                    </div>
                )}
            </div>
        );
    }
}

export default GetRoot;