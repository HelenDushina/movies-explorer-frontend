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

function App() {
  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/movies">
            <Movies />
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
      </div>
    </div>
  );
}

export default App;
