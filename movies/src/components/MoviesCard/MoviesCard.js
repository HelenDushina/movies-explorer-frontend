import React from 'react';
import { Link } from "react-router-dom";
import './MoviesCard.css'


function MoviesCard (props) {
  return (
    <div>
      <div className="movie__group">
        <p className="movie__title">{props.name}</p>
        <p className="movie__subtitle">{props.duration}</p>
      </div>
      <img className="movie__image" src={props.link} alt={props.name} />
      <div className="movie__group movie__group_button">
        <button className="movie__button">Сохранить</button>
      </div>
    </div>
  );
}

export default MoviesCard;