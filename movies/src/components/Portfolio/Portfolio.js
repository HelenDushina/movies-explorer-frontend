import './Portfolio.css';
import '../Main/Main.css';
import linkimage from "../../images/text__COLOR_font-main.svg";


function Portfolio (props) {
  return (
    <section className="portfolio">
      <h2 className = "portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <div className="portfolio__linkgroup">
              <a
              className="portfolio__link"
              href="https://github.com/HelenDushina/how-to-learn"
              target="_blank"
              >Статичный сайт</a>
              <img src={linkimage} alt="Логотип" className="portfolio__linkimage"/>
          </div>
        </li>
        <li>
          <div className="portfolio__linkgroup">
          <a
            className="portfolio__link"
            href="https://helendushina.github.io/russian-travel/"
            target="_blank"
          >Адаптивный сайт</a>
          <img src={linkimage} alt="Логотип" className="portfolio__linkimage"/>
          </div>
        </li>
        <li>
          <div className="portfolio__linkgroup portfolio__linkgroup_noborder">
          <a
            className="portfolio__link portfolio__link_nopadding"
            href="http://mestohelen.students.nomoredomains.work/"
            target="_blank"
          >Одностраничное приложение</a>
          <img src={linkimage} alt="Логотип" className="portfolio__linkimage portfolio__linkimage_nopadding"/>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;