import React from "react";
// import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const { searchState, setSearchState } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchState(document.querySelector("#search-input").value);
    console.log(searchState);
  };



  return (
    <section>
      <div id="search-bar">
        <input id="search-input"></input>
        <button id="search-btn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
