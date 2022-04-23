import React, { useEffect, useState} from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {Route, Switch} from "react-router-dom";
import {maxScreenWidth, mediumScreenWidth, minScreenWidth,
  amountMaxScreenWidth, amountMediumScreenWidth, amountMinScreenWidth,
   stepMaxScreenWidth, stepMediumScreenWidth, stepMinScreenWidth} from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";

function MoviesCardList ({movies, savedMovies = false, error, onMovieSave, savedMoviesList }) {

  const { width } = useWindowSize();

  const [index , setIndex] = useState (0);
  const [inintialAmount , setinintialAmount] = useState (0);


  useEffect(() => {
    if (width >= maxScreenWidth) {
      setinintialAmount(amountMaxScreenWidth + stepMaxScreenWidth*index);
    }
    else if (width >= minScreenWidth && width<=mediumScreenWidth) {
      setinintialAmount(amountMediumScreenWidth + stepMediumScreenWidth*index);
    }
    else {
      setinintialAmount(amountMinScreenWidth + stepMinScreenWidth*index);
    }
    if(savedMovies) {
      setinintialAmount(movies.data.length);
    }

  }, [width, index]);


  const moreButtonClassName = `moviesCardList__button ${inintialAmount>=movies.data.length ? 'moviesCardList__button_disable' : ''}`

  if (error) {
    return <div className="moviesCardList">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
      Подождите немного и попробуйте ещё раз</div>;
  }


  if (movies.data.length === 0) {
    return <div className="moviesCardList">Ничего не найдено</div>
  }


  return (
    <section className={`moviesCardList ${savedMovies && "moviesCardList_saved"}`}>

          <div className="moviesCardList__movies">
            {movies.data.slice(0, inintialAmount).map (item =>
            (
              <MoviesCard
                key={item.movieId}
                name={item.nameRU}
                link = {item.image}
                trailerlink={item.trailerLink}
                duration={item.duration}
                onMovieSave={onMovieSave}
                savedMoviesList = {savedMoviesList? savedMoviesList : []}
                movie={{
                  country: item.country,
                  director: item.director,
                  duration: item.duration,
                  year: item.year,
                  description: item.description,
                  image: item.image,
                  trailerLink: item.trailerLink,
                  thumbnail: item.thumbnail,
                  nameRU: item.nameRU,
                  nameEN: item.nameEN,
                  movieId: item.movieId
                }}
              />)
            )
            }
           </div>
        <Switch>
        <Route exact path='/movies'>
          <div className="moviesCardList__buttongroup">
            <button onClick={ () => setIndex (index+1 ) } className={moreButtonClassName}>Ещё</button>
          </div>
        </Route>
        </Switch>
    </section>
  );
}

export default MoviesCardList;