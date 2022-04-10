import React from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  initialMovies
} from '../../utils/constants';
import {Route, Switch} from "react-router-dom";


function MoviesCardList (savedMovies = false) {
  return (
    <section className={`moviesCardList ${savedMovies && "moviesCardList_saved"}`}>
      <div className="moviesCardList__movies">
        { initialMovies.map(item =>
          (<MoviesCard
            name = {item.name}
            link = {item.link}
            duration = {item.duration}
        />)
        )}
      </div>
      <Switch>
        <Route exact path='/movies'>
          <div className="moviesCardList__buttongroup">
            <button className="moviesCardList__button">Ещё</button>
          </div>
        </Route>
      </Switch>
    </section>
  );
}

export default MoviesCardList;