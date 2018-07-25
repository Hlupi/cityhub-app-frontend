import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">CityHub</h1>
        </header>
        <main>
          <LoginPage />
        </main>
      </div>
    );
  }
}

export default App;
