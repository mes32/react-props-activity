import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import EnterNumber from './components/EnterNumber/EnterNumber';
import CurrentTotal from './components/CurrentTotal/CurrentTotal';
import History from './components/History/History';

{/* 
  
  
   */}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
        <EnterNumber />
        <CurrentTotal />
        <p>Click save above to save the current total in the history</p>
        <h2>History</h2>
        <History />
      </div>
    );
  }
}

export default App;
