import React, {useEffect} from "react";
import AuthForm from "../AuthForm/AuthForm";
import "../AuthForm/AuthForm.css"
import Header from "../Header/Header";
import {useFormWithValidation} from "../../hooks/useForm";

function Register (props) {

  const {values, handleChange, setValues, errors, isValid, resetForm} = useFormWithValidation();

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit (e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault ();

    props.onRegister ({
      password: values.password,
      email: values.email,
      name: values.name,
    });
  }


  return (
    <>
      <Header/>
      <AuthForm title='Добро пожаловать!' buttonText='Зарегистрироваться' onSubmit={handleSubmit} isDisabled = {!isValid}>
        <label className="authform__label">
          <span className="authform__infoinput">Имя</span>
          <input
            type="text"
            name="name"
            // placeholder="Имя"
            className={`authform__field popup__form-field_theme_name ${errors.name && "authform__field_error"}`}
            required
            minLength="2"
            maxLength="40"
            id="name"
            value={values.name} onChange={handleChange}
          />
          <span id="name-error" className="error">{errors.name || ""}</span>
          <span className="authform__infoinput">E-mail</span>
          <input
            type="email"
            name="email"
            // placeholder="Email"
            className={`authform__field popup__form-field_theme_email ${errors.email && "authform__field_error"}`}
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
            className={`authform__field popup__form-field_theme_password ${errors.password && "authform__field_error"}`}
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

export default Register;