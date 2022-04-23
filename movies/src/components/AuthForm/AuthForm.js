import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import "./AuthForm.css"

function AuthForm ({children, title, buttonText, onSubmit,
                     isDisabled = false, isProfile= false, onSignOut, ToolTipStatus, warningMessage}) {


  return (
    <div className='authform'>
      <h2 className={`authform__title ${isProfile && "authform__title_profile"}`}>{title}</h2>
      <form className='auth__form' name='' onSubmit={onSubmit}>
        {children}
        {!ToolTipStatus && <p className="authform__warning">{warningMessage}</p>}
        <button type="submit" className={`authform__button ${isDisabled && "authform__button_disabled"} 
        ${isProfile && "authform__button_invisible"}`} disabled={isDisabled} >{buttonText}</button>

          <Switch>
            <Route exact path='/signup'>
              <div className="authform__signin">
                <p className="authform__span">Уже зарегистрированы?</p>
               <Link className="authform__span" to="signin">
                  Войти
                </Link>
              </div>
            </Route>
            <Route exact path='/signin'>
              <div className="authform__signup">
                <p className="authform__span">Ещё не зарегистрированы?</p>
                <Link className="authform__span" to="signup">
                  Регистрация
                </Link>
              </div>
            </Route>
            <Route exact path='/profile'>
              <div className="authform__profile">
                <button type="submit" className={`authform__button  authform__button_profile ${isDisabled && "authform__button_disabled"}`} disabled={isDisabled} >{buttonText}</button>
                <button type='button' className="authform__button authform__button_logout" onClick={onSignOut}>Выйти из аккаунта</button>
              </div>
            </Route>
          </Switch>

      </form>
    </div>

  )
}


export default AuthForm;