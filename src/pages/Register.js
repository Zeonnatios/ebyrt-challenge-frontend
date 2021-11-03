import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import TasksContext from '../context/TasksContext';

function Login() {
  const history = useHistory();
  const { register, setRegister } = useContext(TasksContext);
  const [disabled, setDisabled] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setRegister({
      ...register,
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

  const isValidName = (name) => name !== null || name !== undefined || name !== '';

  useEffect(() => {
    const { email, password, name } = register;

    if (isValidEmail(email) && isValidPassword(password) && isValidName(name)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [register]);

  return (
    <div className="form-container">
      <form className="form">
        <h2>Criar conta</h2>
        <hr />
        <input
          id="name"
          className="input-field"
          data-testid="email-input"
          type="text"
          name="name"
          placeholder="Digite seu nome aqui *"
          onChange={ handleChange }
        />
        <input
          id="email"
          className="input-field"
          type="email"
          name="email"
          placeholder="Digite seu email aqui *"
          onChange={ handleChange }
        />
        <input
          id="password"
          className="input-field"
          type="password"
          name="password"
          placeholder="Digite sua senha aqui *"
          maxLength="6"
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
          onClick={ () => console.log(history) }
        >
          Salvar
        </button>

        <hr />

        <button
          className="button-login"
          type="button"
          onClick={ () => history.push('/') }
        >
          Voltar
        </button>

      </form>
    </div>
  );
}
export default Login;
