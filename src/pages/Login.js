import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import TasksContext from '../context/TasksContext';

function Login() {
  const history = useHistory();
  const url = history.location.pathname;
  const { login, setLogin } = useContext(TasksContext);
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

  return (
    <div className="form-container">
      <form className="form">
        <h2>Login</h2>
        <hr className="form-hr" />
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
          maxLength="6"
          onChange={ handleChange }
        />
        <small id="passwordHelpBlock" className="form-text text-muted">
          Sua senha deve ter 6 números
        </small>
        <hr className="form-hr" />

        <button
          className="button-login"
          type="button"
          disabled={ !disabled }
          onClick={ () => history.push(`${url}tasks`) }
        >
          Entrar
        </button>

        <hr />

        <button
          className="button-login"
          type="button"
          onClick={ () => history.push(`${url}register`) }
        >
          Cadastrar-se
        </button>

      </form>
    </div>
  );
}
export default Login;
