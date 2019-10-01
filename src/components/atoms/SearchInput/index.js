import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
    return (
        <div className="search-input-container">
            <input
                id={props.id}
                type="text"
                value={props.value}
                onChange={props.handleOnChange}
            />
        </div>
    )
}

export default SearchInput;