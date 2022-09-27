import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';

class Clients extends React.Component {
  state = {
    order: false,
    ordered: [],
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/register');
  };

  handleDelete = ({ target }) => {
  const parent = target.parentNode;
  parent.remove();
  };

  handleOrder = () => {
    this.setState((prevState) => ({ order: !prevState.order, ordered: []}),
    () => { 
      const { order } = this.state;
      const { registerData: { registerInfo } } = this.props;
      if(order) {
        const ordered = [...registerInfo];
        ordered.sort((a, b) => { if (a.name < b.name) { return -1; } if (a.name > b.name) { return 1; } return 0; })
        return this.setState({ ordered });
      } 
     });

  }

  render() {
    const {
      loginData: { loginInfo },
      registerData: { registerInfo },
    } = this.props;
    const { ordered } = this.state;
    return (
      <div>
        {loginInfo.email && loginInfo.password ? (
          <div>
            <p>Login Efetuado com sucesso</p>
            <Button onClick={this.handleClick}>Realizar Cadastro</Button>
            {registerInfo.length > 0 && ordered.length === 0 ?
            (
              registerInfo.map(({ name, age, email }) => (
                <div key={ email }>
                  <p>Nome: {name}</p>
                  <p>Idade: {age}</p>
                  <p>Email: {email}</p>
                  <Button onClick={ this.handleDelete }>X</Button>
                </div>
              ))
            ) : (
              ordered.map(({ name, age, email }) => (
                <div key={ email }>
                  <p>Nome: {name}</p>
                  <p>Idade: {age}</p>
                  <p>Email: {email}</p>
                  <Button onClick={ this.handleDelete }>X</Button>
                </div>
            )))}
               <Button onClick={ this.handleOrder }>Ordernar</Button>
          </div>
        ) : (
          <p>Login não Efetuado</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginData: state.loginReducer,
  registerData: state.clientRegisterReducer,
});

export default connect(mapStateToProps, null)(Clients);
