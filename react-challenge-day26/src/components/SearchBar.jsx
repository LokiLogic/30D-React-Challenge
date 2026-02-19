import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            onSearch(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="search-input"
                placeholder="Enter city name"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default SearchBar;