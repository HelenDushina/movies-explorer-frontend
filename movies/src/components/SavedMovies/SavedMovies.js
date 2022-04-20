import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function SavedMovies (props) {
  return (
    <main className="page__content">
      <Header main = {false} onOpenMenu = {props.onOpenMenu}/>
      <SearchForm onSearch = {props.onSearch}
                  initialValueSearch = {props.initialValueSearch}
                  initialValueShort = {props.initialValueShort}/>
      <MoviesCardList movies = {props.movies}
                      savedMovies = {true}
                      onMovieSave={props.onMovieSave}/>
    </main>
  );
}

export default SavedMovies;