import './Footer.css';

function Footer (props) {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__group">
        <p className="footer__copyright">&copy;2022</p>
        <ul className="footer__links">
          <li className="footer__li">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
            >Яндекс.Практикум</a>
          </li>
          <li className="footer__li">
            <a
              className="footer__link"
              href="https://github.com/HelenDushina"
              target="_blank"
            >Github</a>
          </li>
          <li className="footer__li">
            <a
              className="footer__link"
              href="https://www.facebook.com/miamismis"
              target="_blank"
            >Facebook</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;