import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import "../AuthForm/AuthForm.css";
import "./Login.css"
import Header from "../Header/Header";
import {useFormWithValidation} from "../../hooks/useForm";

function Login (props) {

  const {values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

  function handleSubmit (e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault ();

    props.onRegister ({
      password: values.password,
      email: values.email,
    });
  }


  return (
    <>
      <Header/>
      <AuthForm title='Рады видеть!' buttonText='Войти' onSubmit={handleSubmit} isDisabled = {!isValid}>
        <label className="authform__label authform__label_type_login">
          <span className="authform__infoinput">E-mail</span>
          <input
            type="email"
            name="email"
            // placeholder="Email"
            className={`authform__field ${errors.email && "authform__field_error"}`}
            required
            minLength="2"
            maxLength="40"
            id="email"
            autoComplete="off"
            value={values.email} onChange={handleChange}
          />
          <span id="email-error" className="error">{errors.email || ""}</span>
          <span className="authform__infoinput">Пароль</span>
          <input
            type="password"
            name="password"
            // placeholder="Пароль"
            className= {`authform__field popup__form-field_theme_password ${errors.password && "authform__field_error"}`}
            required
            minLength="2"
            maxLength="20"
            id="password"
            autoComplete="off"
            value={values.password} onChange={handleChange}
          />
          <span id="password-error" className="error">{errors.password || ""}</span>
        </label>
      </AuthForm>

    </>
  )
}

export default Login;