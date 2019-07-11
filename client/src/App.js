import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Users from './components/Users.js';
import UserView from './components/UserView.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/users"
          render={props => <Users {...props} />}
        />

        <Route
          path="/users/:id"
          render={props => <UserView {...props} />}
        />
      </div>
    );
  }
}

export default App;
