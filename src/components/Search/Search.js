import React, { useState } from "react";
import CardComponent from "../Card/CardComponent.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Search.css";
import TopMovies from "../TopMovies/TopMovies.js";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const apiKey = "5ab85caa7b79798db1108c5cc409d303";

  const abcurl = `https://api.themoviedb.org/4/account/5ab85caa7b79798db1108c5cc409d303/movie/favorites?page=1&sort_by=release_date.asc`;

  function check() {
    fetch(abcurl)
      .then((results) => results.json())
      .then((data) => console.log(data));
  }

  function searchHandle(e) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}
      `)
      .then((response) => response.json())
      .then((data) => {
        setSearchData(data.results);
      });
    e.preventDefault();
  }

  // *****************top movies fetch****************

  const fetchTopMovies = (e) => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=5ab85caa7b79798db1108c5cc409d303&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopMovies(data.results);
      });
    e.preventDefault();
  };
  return (
    <div className="search">
      <nav>
        <a href="/" onClick={fetchTopMovies}>
          Movies
        </a>
        <a href="/">TV Shows</a>
        <a href="/">Trending</a>
        <a href="/">Top 20</a>
      </nav>
      <Router>
        <Link to="/topmovies">Top Movies</Link>
        <Link to="/topTvShows">Top TVShows</Link>
        <Link to="/Trending">Trending</Link>
      </Router>
      <small style={{ fontWeight: "100" }}>
        Above links not working yet!!! Wellll you still can Search ;)
      </small>

      <button onClick={check}>Click</button>

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
        {/* {topMovies.length === 0 ? 
        : (<h2>Ran into some problem, check console</h2>)
         : (
           topMovies.map((movies, index) => {
             return(
               <div>
                 <TopMovies/>
               </div>

             )
           })
         )
         } */}

        {searchData.length === 0 ? (
          <h2>No Result to show yet</h2>
        ) : (
          searchData.map((data, index) => {
            return (
              <div>
                <CardComponent searchInfo={data} key={data.id} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Search;
