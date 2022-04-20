import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound"
import {Route, Switch, withRouter} from "react-router-dom";
import React, {useCallback, useEffect, useState}  from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import * as MainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRout";
import {deleteMovie, getContext} from "../../utils/MainApi";
import MoviesApi from "../../utils/MoviesApi";
import { useApi } from "../../hooks/UseApi";


function App(props) {

  const [isMenuOpen, setMenuOpen] = React.useState (false);

  function closePopup () {
    setMenuOpen (false);
  }

  function handleOpenMenuClick () {
    setMenuOpen (true);
  }

  const [currentUser, setUser] = React.useState ({ data: {name: '', email: ''}});
  const [loggedIn, setLoggedIn] = React.useState (false);
  const [ToolTipStatus, setToolTipStatus] = React.useState (true);
  const [warningMessage, setWarningMessage] = React.useState("");

  function onLogin ({email, password}) {
    MainApi.authorize (email, password).then ((res) => {
      if (res.token) {
        setLoggedIn (true);
        // setUserMail (email);
        localStorage.setItem ('token', res.token);
        props.history.push('./movies')
      } else {
        // // невалидные данные
        setToolTipStatus (false);
        setWarningMessage(res.message);
      }
    })
      .catch ((err) => {
        setToolTipStatus (false);
        setWarningMessage("Что-то пошло не так.");
      });
  }

  function onRegister ({password, email, name}) {
    MainApi.register (password, email, name).then ((res) => {

      if (res._id) {
        setToolTipStatus (true);
        setTimeout (
          () => {
            onLogin ({email, password});
          },
          2 * 1000
        );

      } else {
        setToolTipStatus (false);
        setWarningMessage(res.message);
      }
    })
      .catch (err => {
        setToolTipStatus (false);
        setWarningMessage("Что-то пошло не так.");

      });
  }

  useEffect (() => {
    tokenCheck ();
    setToolTipStatus(true);
  }, []);

  function tokenCheck () {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит валидность токена
    const jwt = localStorage.getItem ('token');
    if (jwt) {
      // проверим токен
      MainApi.getContext (jwt).then ((res) => {
        if (res) {
          setLoggedIn (true);
          setUser (res);
          setTimeout(()=> {
            props.history.push ("/movies");
          }, 300)
        } else {

          localStorage.removeItem ('token');
        }
      })
        .catch ((err) => {
          console.log (err); // выведем ошибку в консоль
        });
    }
  }

   React.useEffect (() => {
    if (loggedIn) {
      MainApi.getContext (localStorage.getItem ('token'))
        .then ((userData) => {
          setUser (userData);
        })
        .catch ((err) => {
          console.log (err);
        });
    }
  },  [loggedIn]);

  function handleUpdateUser (data) {
    MainApi.editUser (data).then (res => {
      //отображаем инфо о пользователе
      setToolTipStatus (false);
      setWarningMessage("Данные успешно обновлены");
      setUser(res);

    }).catch ((err) => {
      setToolTipStatus (false);
      setWarningMessage("что-то пошло не так.");
      console.log (err); // выведем ошибку в консоль
    });
  }

  //FILMS

  function filterMovies(moviesList, searchQuery) {

    const filteredMovies = moviesList.filter((mov) => {
      return mov.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    });

    return filteredMovies;

  }

  function filterMoviesShort(moviesList, shortQuery) {

    if (shortQuery) {
      const filteredShortMovies = moviesList.filter((mov) => {
        return mov.duration <= 40
      });
      return filteredShortMovies;
    }
    else {
      return moviesList;
    }
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [shortQuery, setShortQuery] = useState(false);


  const handler = useCallback(() => {
    return MoviesApi.getInitialMovies ();
  },[searchQuery]);

  const { data, loading, error } = useApi(handler);

  const [movies, setMovies] = React.useState ([]);

  React.useEffect (() => {
    if (searchQuery === "") {
      setMovies ([]);
      localStorage.setItem("movies", []);
    }
    else {
      const filteredMovies = filterMovies (data,searchQuery,shortQuery)
        .map((movie) => {
          const nameEn = movie.nameEN ? movie.nameEN : "---";
          const imageLink = `https://api.nomoreparties.co${movie.image.url}`;
          const thumbnailLink = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
          const country = movie.country ? movie.country : "---";
          const director = movie.director ? movie.director : "---";
          const trailerLink = movie.trailerLink ? movie.trailerLink : "https://youtube.ru";

        return {
          country: country,
          director: director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: imageLink,
          trailerLink: trailerLink,
          movieId: movie.id,
          nameEN: nameEn,
          nameRU: movie.nameRU,
          thumbnail: thumbnailLink,
        };
      });

      setMovies (filteredMovies);
      localStorage.setItem("movies", filterMovies (data,searchQuery));
    }
  },  [data, searchQuery, shortQuery]);

  function handleSearch (data) {
    setSearchQuery(data.film);
    setShortQuery(data.duration);
    localStorage.setItem("searchQuery",searchQuery);
    localStorage.setItem("shortQuery",shortQuery);
  }

  function handleChangeDuration() {
    setShortQuery(!shortQuery);
  }

  const [savedMovies, setSavedMovies] = React.useState ([]);

  React.useEffect (() => {
    if (loggedIn) {
      MainApi.getMovies ()
        .then ((res) => {
          localStorage.setItem ("savedMovies", res.data);
          setSavedMovies (res.data);
        })
        .catch ((err) => {
          console.log (err);
        });
    }
  },  [loggedIn]);

  function handleMovieSave (movie) {

    const isSaved = savedMovies.some (i => i.movieId === movie.movieId);

    if (isSaved) {

      const idToDelete = savedMovies.find((i) => {
          return i.movieId === movie.movieId;
        })._id;

      MainApi.deleteMovie (idToDelete)
        .then (() => {
          return MainApi.getMovies ();
        })
        .then ((res) => {
          localStorage.setItem ("savedMovies", res.data);
          setSavedMovies (res.data);
        })
        .catch ((err) => {
          console.log (err);
        });
    }
    else {
      MainApi.saveMovie (movie)
        .then (() => {
          return MainApi.getMovies ();
        })
        .then ((res) => {
          localStorage.setItem ("savedMovies", res.data);
          setSavedMovies (res.data);
        })
        .catch ((err) => {
          console.log (err);
        });
    }
  }


  const [searchQuerySaved, setSearchQuerySaved] = useState("");
  const [shortQuerySaved, setshortQuerySaved] = useState(false);

  function handleSavedSearch (data) {
    setSearchQuerySaved(data.film);
    setshortQuerySaved(data.duration);
    const filteredMovies = filterMovies (savedMovies,data.film);
    setSavedMovies(filteredMovies);
  }

  function handleChangeDurationSaved() {
    setshortQuerySaved(!shortQuerySaved);
  }

  function handleSignOut () {
    setLoggedIn (false);
    localStorage.removeItem ('token');
    localStorage.removeItem ('savedMovies');
    localStorage.removeItem ('movies');
    localStorage.removeItem('searchQuery');
    localStorage.removeItem('shortQuery');
    props.history.push ("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>

    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute exact path="/movies"
                          onOpenMenu={handleOpenMenuClick}
                          loggedIn={loggedIn}
                          component={Movies}
                          onSearch = {handleSearch}
                          handleChangeDuration = {handleChangeDuration}
                          initialValueSearch = {searchQuery}
                          initialValueShort = {shortQuery}
                          isLoading={loading}
                          error = {error}
                          onMovieSave = {handleMovieSave}
                          movies = {shortQuery? {data: filterMoviesShort(movies, shortQuery)}: {data: movies}}
                          savedMoviesList = {savedMovies}
          />
          <ProtectedRoute  exact path="/saved-movies"
                           onOpenMenu={handleOpenMenuClick}
                           loggedIn={loggedIn}
                           component={SavedMovies}
                           onMovieSave = {handleMovieSave}
                           movies = {shortQuerySaved? {data: filterMoviesShort(savedMovies, shortQuerySaved)}: {data: savedMovies}}
                           onSearch = {handleSavedSearch}
                           handleChangeDuration = {handleChangeDurationSaved}
                           initialValueSearch = {searchQuerySaved}
                           initialValueShort = {shortQuerySaved}
          />
          <Route exact path="/signup">
            <Register onRegister={onRegister} ToolTipStatus = {ToolTipStatus} warningMessage = {warningMessage}/>
          </Route>
          <Route exact path="/signin">
            <Login onLogin={onLogin} ToolTipStatus = {ToolTipStatus} warningMessage = {warningMessage}/>
          </Route>
          <Route exact path="/profile">
            <Profile  onUpdateUser={handleUpdateUser} ToolTipStatus = {ToolTipStatus} warningMessage = {warningMessage} onSignOut={handleSignOut}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        {loggedIn && <Footer />}
        < Navigation isOpen = {isMenuOpen} onClose={closePopup}/>
      </div>
    </div>

    </CurrentUserContext.Provider>

  );
}

export default withRouter(App);
