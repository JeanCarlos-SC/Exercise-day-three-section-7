import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Registration from './pages/Registration';

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/clients" component={ Clients } />
          <Route exact path="/register" component={ Registration } />
        </Switch>
    )
  }
}

export default App;
