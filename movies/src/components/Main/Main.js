import React from 'react';
import Promo from "../Promo/Promo";
import "./Main.css"
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import NavTab from "../NavTab/NavTab";

function Main (props) {
  return (
  <main className="content page__content">
    <Header main = {true} loggedIn = {props.loggedIn}/>
    <NavTab />
    <Promo/>
    <Techs/>
    <AboutMe />
    <Portfolio />
  </main>
  );
}

export default Main;