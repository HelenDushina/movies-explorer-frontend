import './Techs.css';
import '../Main/Main.css';

function Techs (props) {
  return (
      <section className="tech" id = "tech">
        <h2 className = "title title_place_tech">Технологии</h2>
        <h3 className = "name name_place_tech" >7 технологий</h3>
        <p className="tech__about">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
        <ul className="tech__list">
          <li className="tech__listitem">HTML</li>
          <li className="tech__listitem">CSS</li>
          <li className="tech__listitem">JS</li>
          <li className="tech__listitem">React</li>
          <li className="tech__listitem">Git</li>
          <li className="tech__listitem">Express.js</li>
          <li className="tech__listitem">mongoDB</li>
        </ul>
      </section>
  );
}

export default Techs;