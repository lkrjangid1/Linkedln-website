import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroContainer from './components/HeroContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <div className="container">
          <HeroContainer />
        </div>

        <footer>
        </footer>
      </div>
    );
  }
}

export default App;