import React, { useState } from "react";
import Card from "../Card/Card";
import "./Search.css";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const apiKey = "5ab85caa7b79798db1108c5cc409d303";

  function searchHandle(e) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}
      `)
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data.results);
      });
    e.preventDefault();
  }

  return (
    <div className="search">
      <nav>
        <a href="/">Movies</a>
        <a href="/">TV Shows</a>
        <a href="/">Trending</a>
        <a href="/">Top 20</a>
      </nav>
      <div className="form">
        <form onSubmit={searchHandle} className="search-div">
          <input
            placeholder="Enter a movie name..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={searchHandle}>Search</button>
        </form>
      </div>
      <div className="card-container">
        {searchData.length === 0 ? (
          <h1>No Result Found</h1>
        ) : (
          searchData.map((data, index) => {
            return <Card searchInfo={data} key={index} />;
          })
        )}
      </div>
    </div>
  );
};

export default Search;
