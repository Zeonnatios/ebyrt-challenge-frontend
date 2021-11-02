import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import TasksContext from '../context/TasksContext';

function Login() {
  const { login, setLogin } = useContext(TasksContext);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    const parseEmail = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    return parseEmail.test(email);
  };

  const isValidPassword = (password) => {
    const passwordLengthValidate = 6;
    return password.length >= passwordLengthValidate;
  };

  useEffect(() => {
    const { email, password } = login;

    if (isValidEmail(email) && isValidPassword(password)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [login]);

  const signIn = () => {
    setShouldRedirect(true);
  };

  return (
    <div className="form-container">
      <form className="form">
        <h2>Login</h2>
        <hr />
        <input
          id="email"
          className="input-field"
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="Digite seu email aqui *"
          onChange={ handleChange }
        />
        <input
          id="password"
          className="input-field"
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Digite sua senha aqui *"
          onChange={ handleChange }
        />
        <small id="passwordHelpBlock" className="form-text text-muted">
          Sua senha deve ter 6 números
        </small>
        <hr />

        <button
          className="button-login"
          type="button"
          disabled={ !disabled }
          onClick={ signIn }
        >
          Entrar
        </button>
        {shouldRedirect ? <Redirect to="/todoList" /> : null}
      </form>
    </div>
  );
}
export default Login;
