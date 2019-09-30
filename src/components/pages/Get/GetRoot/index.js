import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../../../atoms/SearchInput';
import Button from '../../../atoms/Button';
import NoResults from '../../../atoms/NoResults';

class GetRoot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            searchResults: null
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.renderAllResults = this.renderAllResults.bind(this);
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
        return (
            <Link to={`${this.props.match.url}/${result.id}`} className="get-result-deck-link">
                {result.title}
            </Link>
        );
    }

    renderAllResults(results) {
        if (!results) return undefined;
        const decks = results.filter(r => r.type === 'deck');
        const cards = results.filter(r => r.type === 'card');
        const resultsLists = [decks, cards].map(list => (
            <div className="search-results-display">
                {list}
            </div>
        ));
        return (
            <div className="search-results-display">
                {resultsLists}
            </div>
        );
    }

    render() {
        //console.log('GetRoot', this.props);
        const results = this.renderAllResults(this.state.searchResults);
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
            </div>
        );
    }
}

export default GetRoot;