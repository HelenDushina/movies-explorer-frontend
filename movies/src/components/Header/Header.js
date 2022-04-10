import headerLogo from '../../images/logo.svg';
import './Header.css';
import {Link, Route, Switch} from "react-router-dom";
import landingLogo from "../../images/pic__COLOR_landing-logo.svg";
import iconProfile from "../../images/icon__prof.svg";
import iconMenu from "../../images/icon__gamb.png";

function Header (props) {

  const isMain = props.main;
  const headerbackgroundClassName = `header page__content ${isMain ? 'header_type_main' : 'header_type_else'}`

  return (
         <header className={headerbackgroundClassName}>
              <Switch>
                <Route exact path='/'>
                  <div className="header__groupnav">
                    <Link className="header__link" to='/'><img src={headerLogo} alt="Логотип" className="header__logo"/></Link>
                   <div className="header__group">
                     <Link className="header__link header__link_type_register" to='/signup'>
                      Регистрация
                     </Link>
                     <Link className="header__link header__link_type_signin" to='/signin'>
                       Войти
                     </Link>
                   </div>
                  </div>
                  <div className="header__cover">
                    <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
                    <img src={landingLogo} alt="Логотип" className="header__coverlogo"/>
                  </div>
                </Route>
                <Route exact path={["/movies","/saved-movies","/profile"]}>
                  <div className="header__groupnav">
                    <Link className="header__link" to='/'><img src={headerLogo} alt="Логотип" className="header__logo"/></Link>
                    <div className="header__group header__group_movies">
                      <Link className="header__link header__link_type_movies" to='/movies'>
                        Фильмы
                      </Link>
                      <Link className="header__link header__link_type_movies" to='/saved-movies'>
                       Сохранённые фильмы
                     </Link>
                    </div>
                    <Link className="header__link header__link_type_profile" to='/profile'>
                      Аккаунт
                        <img src={iconProfile} alt="profileicon" className="header__iconprofile"/>
                    </Link>
                    <button type="button" className="header__buttonmenu" onClick={props.onOpenMenu}><img className="header__buttonicon" src={iconMenu} alt="Открыть меню"/></button>
                    <div className="header__menu"></div>
                  </div>
                </Route>
                <Route exact path={["/signup","/signin"]}>
                  <Link className="header__link header__link_auth" to='/'><img src={headerLogo} alt="Логотип" className="header__logo"/></Link>
                </Route>
             </Switch>
        </header>
  );
}

export default Header;