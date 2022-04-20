import React from 'react';
import './SearchForm.css'
import searchIcon from '../../images/icon__COLOR_invisible.svg'


function SearchForm (props) {


  // Стейты
  const [valueShort, setValueShort] = React.useState(props.initialValueShort);
  const [valueFilm, setvalueFilm] = React.useState(props.initialValueSearch);

  const сheckboxButtonClassName = (
    `searchform__filterCheckbox_visible-checkbox ${valueShort ? 'searchform__filterCheckbox_visible-checkbox_active' : 'searchform__filterCheckbox_visible-checkbox_disable'}`
  );

  // Обработчик изменения инпута обновляет стейт
  function handleChangeDuration(e) {
    setValueShort(!valueShort);
  }

  function handleChangeFilm(e) {
    setvalueFilm(e.target.value);
  }

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault ();
    props.onSearch({
      duration: valueShort,
      film: valueFilm,
      }
    );

  }

  return (
    <section className="searchform">
      <div className="searchform__group">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <div className="searchform_searchgroup">
          <input type="text" placeholder="Фильм" className="searchform__input" value={valueFilm} onChange={handleChangeFilm} required/>
            <button className="searchform__button" type="submit" >
              <img src={searchIcon} alt="Картинка поиска" className="searchform__icon"/>
            </button>
          </div>
            <label className="searchform__label"> Короткометражки
              <input type="checkbox" value={valueShort}  onChange={handleChangeDuration} className="searchform__filterCheckbox"/>
              <span className={сheckboxButtonClassName}><div className="searchform_checkboxcicle"></div></span>
            </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;