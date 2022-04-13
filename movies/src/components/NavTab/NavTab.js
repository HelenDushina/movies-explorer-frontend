import './NavTab.css';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";


function NavTab (props) {
  const { path, url } = useRouteMatch();

  return (
    <section className="navtab">

        <ul className="navtab__about">
          <li className="navtab__li">
            <a className="navtab__link" href="#promo">О проекте</a>
          </li>
          <li className="navtab__li">
            <a className="navtab__link" href="#tech">Технологии</a>
          </li>
          <li className="navtab__li">
            <a className="navtab__link" href="#student">Студент</a>
          </li>
        </ul>

    </section>
  );
}

export default NavTab;