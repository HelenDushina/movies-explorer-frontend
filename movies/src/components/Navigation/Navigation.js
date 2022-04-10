import React from 'react';
import {Link} from "react-router-dom";
import "./Navigation.css";
import "../Header/Header.css"

import iconProfile from "../../images/icon__prof.svg";
import iconClose from "../../images/Group.svg";

function Navigation (props) {

  return (
    <div className={`navigation__popup ${props.isOpen ? 'navigation__popup_opend' : ''}`}>
      <button type="button" className="navigation__close">
        <img
          src={iconClose}
          alt="закрыть"
          className="navigation__close-icon"
          onClick={props.onClose}
        />
      </button>
      <Link className="navigation__link" to='/'>
        Главная
      </Link>
      <Link className="navigation__link" to='/movies'>
        Фильмы
      </Link>
      <Link className="navigation__link" to='/saved-movies'>
        Сохранённые фильмы
      </Link>
      <Link className="navigation__link_type_profile" to='/profile'>
        Аккаунт
        <img src={iconProfile} alt="profileicon" className="header__iconprofile"/>
      </Link>
    </div>
  );
}

export default Navigation;