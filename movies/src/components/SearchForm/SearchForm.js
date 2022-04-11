import React from 'react';
import './SearchForm.css'
import searchIcon from '../../images/icon__COLOR_invisible.svg'


function SearchForm (props) {

  // Стейт, в котором содержится значение чекбокса короткометражки
  const [valueDuration, setValueDuration] = React.useState('');

  // Обработчик изменения инпута обновляет стейт
  function handleChangeDuration(e) {
    setValueDuration(e.target.value);
  }


  return (
    <section className="searchform">
      <div className="searchform__group">
        <form className="searchform__form">
          <div className="searchform_searchgroup">
          <input type="text" placeholder="Фильм" className="searchform__input" required/>
            <button className="searchform__button" type="submit">
              <img src={searchIcon} alt="Картинка поиска" className="searchform__icon"/>
            </button>
          </div>
            <label className="searchform__label"> Короткометражки
              <input type="checkbox" value={valueDuration} onChange={handleChangeDuration} className="searchform__filterCheckbox"/>
              <span className="searchform__filterCheckbox_visible-checkbox"><div className="searchform_checkboxcicle"></div></span>
            </label>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;