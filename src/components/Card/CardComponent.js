import React from "react";
import "../Card/Card.css";

const CardComponent = (props) => {
  const imageURl = `https://image.tmdb.org/t/p/w500${props.searchInfo.backdrop_path}`;
  return (
    <div className="container">
      <div className="card">
        <div className="card-img">
          <img src={`${imageURl}`} alt="" />
        </div>
        <div className="card-title">
          <p>
            <strong>Title: </strong>
            {props.searchInfo.original_title}
          </p>
          <p>
            <strong>Ratings: </strong>
            {props.searchInfo.vote_average}/10
          </p>

          <p>
            <strong>Release Date: </strong>
            {props.searchInfo.release_date}
          </p>
        </div>
        <div>
          <h3>OverView</h3>
          <p className="card-info">{props.searchInfo.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
