import React, { useState } from "react";
// import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Results from "../../components/Results/Results";

const SearchPage = () => {
  const [searchState, setSearchState] = useState("");

  return (
    <main className="flex-column align-center">
      <h1>NC Revelers Orchestra Book</h1>
      {/* recent changes component goes here */}
      {/* edit book button goes here? */}
      <SearchBar searchState={searchState} setSearchState={setSearchState} />
      <Results searchState={searchState} />
    </main>
  );
};

export default SearchPage;
