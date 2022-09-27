import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import loginAction from '../actions/loginAction'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { history, loginDispatch } = this.props;
    loginDispatch(this.state);
    history.push('/clients');
  };
  
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Input
          type='email'
          placeholder='Digite seu Email...'
          name='email'
          value={email}
          onChange={this.handleChange}
        />
        <Input
          type='password'
          placeholder='Digite sua Senha...'
          name='password'
          value={password}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleClick}>Entrar</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (state) => dispatch(loginAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
