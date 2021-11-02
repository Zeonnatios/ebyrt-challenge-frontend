import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions';
import '../style/style.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.userValidation = this.userValidation.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    }, () => this.userValidation());
  }

  isValidEmail(email) {
    const parseEmail = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
    return parseEmail.test(email);
  }

  isValidPassword(password) {
    const passwordLengthValidate = 6;
    return password.length >= passwordLengthValidate;
  }

  userValidation() {
    const { email, password } = this.state;

    if (isValidEmail(email) && isValidPassword(password)) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { singIn } = this.props;
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
            placeholder="Digite seu email aqui"
            onChange={ this.handleChange }
          />
          <input
            id="password"
            className="input-field"
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Digite sua senha aqui"
            onChange={ this.handleChange }
          />
          <hr />
          <Link to="/carteira">
            <button
              className="button-login"
              disabled={ disabled }
              type="button"
              onClick={ () => singIn({ email, password }) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  singIn: (payload) => dispatch(setUser(payload)),
});

Login.propTypes = {
  singIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
