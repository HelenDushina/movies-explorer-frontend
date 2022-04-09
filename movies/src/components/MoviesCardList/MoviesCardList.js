import React from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  initialMovies
} from '../../utils/constants';


function MoviesCardList (props) {
  return (
    <section className="moviesCardList">
      <div className="moviesCardList__movies">
        { initialMovies.map(item =>
          (<MoviesCard
            name = {item.name}
            link = {item.link}
            duration = {item.duration}
        />)
        )}
      </div>
      <div className="moviesCardList__buttongroup">
        <button className="moviesCardList__button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;