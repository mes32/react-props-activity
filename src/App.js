import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
      </div>
    );
  }
}

export default App;
