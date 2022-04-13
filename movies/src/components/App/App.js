import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound"
import {Route, Switch} from "react-router-dom";
import React from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";

function App() {

  const [isMenuOpen, setMenuOpen] = React.useState (false);

  function closePopup () {
    setMenuOpen (false);
  }

  function handleOpenMenuClick () {
    setMenuOpen (true);
  }


  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/movies">
            <Movies onOpenMenu={handleOpenMenuClick} />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies onOpenMenu={handleOpenMenuClick}/>
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/signin">
            <Login/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
        < Navigation isOpen = {isMenuOpen} onClose={closePopup}/>
      </div>
    </div>
  );
}

export default App;
