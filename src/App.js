import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h1>Bikes 4 Kids Test</h1>
          </p>
          <a className="App-link" href="/home" rel="noopener noreferrer">Home</a>
          <a className="App-link" href="/contact" rel="noopener noreferrer">Contact</a>
          <a className="App-link" href="/donate" rel="noopener noreferrer">Donate</a>
        </header>
      </div>
    );
  }
}

export default App;
