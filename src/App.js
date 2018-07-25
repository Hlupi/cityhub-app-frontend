import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/login/LogoutPage'
import InputPage from './components/content/InputPage'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Route exact path="/contents" component={InputPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/" render={() => <Redirect to="/contents" />} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
