import React from "react";
import "../Card/Card.css";
const Card = (props) => {
  const imageURl = `https://image.tmdb.org/t/p/w500${props.searchInfo.backdrop_path}`;
  return (
    <div className="container">
      <div className="card">
        <div className="card-img">
          <img src={`${imageURl}`} alt="movie-poster" />
        </div>
        <div className="card-title">
          <p>{props.searchInfo.original_title}</p>
          <p>{props.searchInfo.vote_average}</p>
          <p>{props.searchInfo.release_date}</p>
        </div>
        <div>
          <p class="card-info">{props.searchInfo.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
