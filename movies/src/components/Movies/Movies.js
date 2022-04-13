import React from 'react';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies (props) {
  return (
    <main className="page__content">
      <Header main = {false} onOpenMenu = {props.onOpenMenu}/>
      <SearchForm/>
      <MoviesCardList/>
    </main>
  );
}

export default Movies;