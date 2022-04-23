import React from 'react';
import './SearchForm.css'
import searchIcon from '../../images/icon__COLOR_invisible.svg'


function SearchForm (props) {

  // Стейты
   const [valueFilm, setvalueFilm] = React.useState(props.savedMovies? localStorage.getItem("searchQuerySaved") : localStorage.getItem("searchQuery"));

  const valueShortClassName = (
    `searchform__filterCheckbox_visible-checkbox ${props.initialValueShort === true? 'searchform__filterCheckbox_visible-checkbox_active' : 'searchform__filterCheckbox_visible-checkbox_disable'}`
  );


  function handleChangeFilm(e) {
    setvalueFilm(e.target.value);
  }

  const handleSubmit = (e) => {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault ();
    props.onSearch({
      // duration: valueShort,
      film: valueFilm,
      }
    );

  }

  return (
    <section className="searchform">
      <div className="searchform__group">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <div className="searchform_searchgroup">
          <input type="text" placeholder="Фильм" className="searchform__input" value={valueFilm || ""} onChange={handleChangeFilm} required/>
            <button className="searchform__button" type="submit" >
              <img src={searchIcon} alt="Картинка поиска" className="searchform__icon"/>
            </button>
          </div>
            <label className="searchform__label"> Короткометражки
              <input type="checkbox"  onChange={props.handleChangeDuration} className="searchform__filterCheckbox"/>
              <span className={valueShortClassName}><div className="searchform_checkboxcicle"></div></span>
            </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;