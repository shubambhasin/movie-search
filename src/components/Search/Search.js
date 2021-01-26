import React, { useState } from "react";
import "./Search.css";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search">
      <nav>
        <a href="/">Movies</a>
        <a href="/">TV Shows</a>
        <a href="/">Trending</a>
        <a href="/">Top 20</a>
      </nav>
      <form type="submit" className="search-div">
        <input placeholder="Enter a movie name..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
