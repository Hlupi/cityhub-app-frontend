import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/login/LoginPage'
import LogoutPage from './components/login/LogoutPage'
import InputPage from './components/content/InputPage'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import TopBar from './components/layout/TopBar'
import {connect} from 'react-redux'

class App extends Component {

  render() {
    const { user } = this.props
    return (
      <Router>
        <div className="App">
          <nav>
            {/* {
              user &&
              <TopBar />
            } */}
            <TopBar />

          </nav>
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App) 
