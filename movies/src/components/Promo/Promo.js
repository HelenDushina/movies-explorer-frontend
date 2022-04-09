import './Promo.css';
import '../Main/Main.css'

function Promo (props) {
  return (
    <section className = "promo" id="promo">
      <h2 className = "title">О проекте</h2>
      <div className="promo__grouprow">
        <div className="promo__group">
          <p className = "promo__subtitle">Дипломный проект включал 5 этапов</p>
          <p className = "promo__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
       </div>
        <div className="promo__group promo__group_last">
          <p className = "promo__subtitle">На выполнение диплома ушло 5 недель</p>
        <p className = "promo__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="promo__duration">
        <p className = "promo__text promo__text_duration_week">1 неделя</p>
        <p className = "promo__text promo__text_duration_mounth">4 недели</p>
      </div>
      <div className="promo__groupduration">
        <p className = "promo__text promo__text_parts_back">Back-end</p>
        <p className = "promo__text promo__text_parts_front">Front-end</p>
      </div>
    </section>
  );
}

export default Promo;