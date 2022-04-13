import React from 'react';
import {Route, Switch} from "react-router-dom";
import './MoviesCard.css'


function MoviesCard (props) {

  const [isLiked, setisLiked] = React.useState (false);

  function handleLikeClick () {
    setisLiked(!isLiked);
  }

  return (
    <div>
      <div className="movie__group">
        <p className="movie__title">{props.name}</p>
        <p className="movie__subtitle">{props.duration}</p>
      </div>
      <img className="movie__image" src={props.link} alt={props.name} />
      <div className="movie__group movie__group_button">
        <Switch>
          <Route exact path='/movies'>
            <button className={`movie__button ${isLiked && "movie__button_saved"}`} onClick={handleLikeClick}>{ `${isLiked ? "" : "Сохранить"}`}</button>
          </Route>
          <Route exact path='/saved-movies'>
            <button className="movie__button movie__button_removesaved" onClick={handleLikeClick}></button>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default MoviesCard;