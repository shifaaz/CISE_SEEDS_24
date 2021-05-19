import React from 'react';
import './SearchHeader.css'
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';

function SearchHeader() {
    return (
        <nav className="searchHeader">
            <center><Link to='/'><img className="header_logo" src="../SEEDS_logo.png" alt="" /></Link></center>
            <center><Link to='/results'></Link></center>
            <SearchBar></SearchBar>
        </nav>
    );
}

export default SearchHeader;