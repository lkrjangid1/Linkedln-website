import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdBar from './components/AdBar'
import MobileConnections from './components/mobile/MobileConnections'
import LeftRail from './components/LeftRail'
import CoreRail from './components/CoreRail'
import RightRail from './components/RightRail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <div className="container">
          <MobileConnections />
          <AdBar />

          <div className="layout-container">
            <LeftRail />
            <CoreRail />
            <RightRail />
          </div>
        </div>

        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
