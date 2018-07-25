import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CityHub</h1>
        </header>
        <main>
          <LoginForm />
        </main>
      </div>
    );
  }
}

export default App;
