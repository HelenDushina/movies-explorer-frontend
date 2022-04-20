import React, {useEffect} from "react";
import AuthForm from "../AuthForm/AuthForm";
import "../AuthForm/AuthForm.css"
import "./Profile.css";
import Header from "../Header/Header";
import {useFormWithValidation} from "../../hooks/useForm";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile (props) {

  const {values, handleChange, setValues, errors, isValid, setInitialValues} = useFormWithValidation();
  const currentUser = React.useContext (CurrentUserContext);


  React.useEffect (() => {
    setValues(currentUser.data);
  }, [currentUser]);



  function handleSubmit (e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault ();

    props.onUpdateUser({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <>
      <Header/>
      <AuthForm title={`Привет, ${currentUser.data.name}`} buttonText='Редактировать' onSubmit={handleSubmit} isProfile={true} isDisabled = {!isValid}
                ToolTipStatus = {props.ToolTipStatus} warningMessage = {props.warningMessage} onSignOut={props.onSignOut}>
        <label className="authform__label authform__label_type_profile">
          <div className="authform__groupinput">
            <span className="authform__infoinput authform__infoinput_profile">Имя</span>
            <input
              type="text"
              name="name"
              // placeholder="Имя"
              className={`authform__field popup__form-field_theme_name authform__field_theme_profile ${errors.name && "authform__field_error"}`}
              required
              minLength="2"
              maxLength="40"
              id="name"
              autoComplete="off"
              value={values.name || ''} onChange={handleChange}
            />
          </div>
          <span id="name-error" className="error">{errors.name || ""}</span>
          <div className="authform__groupinput">
            <span className="authform__infoinput authform__infoinput_profile">E-mail</span>
            <input
              type="email"
              name="email"
              // placeholder="Email"
              className={`authform__field authform__field_theme_profile authform__field_theme_mailprofile ${errors.email && "authform__field_error"}`}
              required
              minLength="2"
              maxLength="40"
              id="email"
              autoComplete="off"
              value={values.email || ''} onChange={handleChange}
            />
          </div>
          <span id="email-error" className="error">{errors.email || ""}</span>
        </label>
      </AuthForm>

    </>
  )
}

export default Profile;