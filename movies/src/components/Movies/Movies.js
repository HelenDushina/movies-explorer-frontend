import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";


function Movies (props) {

  return (
    <main className="page__content">
      <Header main = {false} onOpenMenu = {props.onOpenMenu}/>
      <SearchForm onSearch = {props.onSearch}
                  initialValueSearch ={props.initialValueSearch}
                  initialValueShort = {props.initialValueShort}
                  handleChangeDuration = {props.handleChangeDuration}/>
      {props.isLoading ? (
        <Preloader />
      ) :
      (<MoviesCardList movies = {props.movies}
                       error = {props.error}
                       onMovieSave={props.onMovieSave}
                       savedMovies = {false}
                       savedMoviesList = {props.savedMoviesList}/>)
      }
    </main>
  );
}

export default Movies;