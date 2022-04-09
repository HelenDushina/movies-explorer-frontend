import './AboutMe.css';
import '../Main/Main.css';
import avatarpic from '../../images/DSC_0012.jpg';


function AboutMe (props) {
  return (
    <section className="aboutme" id = "student">
      <h2 className = "title">Студент</h2>
      <div className="aboutme__group">
        <div className="aboutme__grouptext">
          <div>
            <h3 className = "name_place_aboutme" >Елена</h3>
            <p className="aboutme__about">Фронтенд-разработчик, 34 года</p>
            <p className="aboutme__text">Я живу в городе Минск. Окончила БГЭУ факультет финансов и банковского дела в 2010 году. С 2009 года работала 1С разработчиком. Сейчас прохожу курс по веб-разработке</p>
          </div>
          <ul className="aboutme__links">
            <li>
            <a
            className="aboutme__link"
            href="https://www.facebook.com/miamismis"
            target="_blank"
            >Facebook</a>
            </li>
            <li>
              <a
                className="aboutme__link"
                href="https://github.com/HelenDushina"
                target="_blank"
              >Github</a>
            </li>
          </ul>
        </div>
        <img src={avatarpic} alt="Аватар" className="aboutme__avatar"/>
      </div>
    </section>
  );
}

export default AboutMe;