import React from 'react';
import './Homepage.css';
import NavigationBar from './NavBar'
import SearchBar from '../SearchComponents/Searchbar'

function Homepage() {

  return (
    <div className="homepage">
      <NavigationBar></NavigationBar>
      <div className="homepage_body">
        <img src="../SEEDS_logo.png" alt="" />
        <SearchBar></SearchBar>
      </div>
    </div>
  );

};


export default Homepage;