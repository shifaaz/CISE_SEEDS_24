import React from "react";
import "./Homepage.css";
import NavigationBar from "./NavBar";
import SearchBar from "../SearchComponents/Searchbar";
import NewLayout from "../../Components/SearchComponents/NewLayout";
import { Button } from "@material-ui/core";

function Homepage() {
  return (
    <div className="homepage">
      <NavigationBar></NavigationBar>
      <div className="homepage_body">
        <img src="../SEEDS_logo.png" alt="" />
        {/* <SearchBar></SearchBar> */}
        <NewLayout />

        
      </div>
    </div>
  );
}

export default Homepage;
