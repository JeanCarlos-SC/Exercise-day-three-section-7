import React from "react";
import { connect } from "react-redux";
import Input from "../components/Input";
import registerAction from "../actions/registerAction";
import Button from "../components/Button";

class Registration extends React.Component {
  state = {
    name:'',
    age: 0,
    email:'',
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { history, registerDispatch } = this.props;
    registerDispatch(this.state);
    history.push('/clients');
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
       <Input 
       type='text'
       placeholder='Digite seu nome....'
       name='name'
       value={ name }
       onChange={ this.handleChange }
       />
       <Input 
       type='text'
       placeholder='Digite sua Idade....'
       name='age'
       value={ age }
       onChange={ this.handleChange }
       />
       <Input 
       type='text'
       placeholder='Digite seu email....'
       name='email'
       value={ email }
       onChange={ this.handleChange }
       />

       <Button onClick={ this.handleClick }>Cadastrar</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerDispatch: (state) => dispatch(registerAction(state)),
});

export default connect(null, mapDispatchToProps)(Registration);