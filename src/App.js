import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import EnterNumber from './components/EnterNumber/EnterNumber';
import CurrentTotal from './components/CurrentTotal/CurrentTotal';
import History from './components/History/History';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      history: [],
    }
  }

  // Increase the current total by an amount
  up = (amount) => {
    this.setState({
      total: this.state.total + amount,
    })
  }

  // Decrease the current total by an amount
  down = (amount) => {
    this.setState({
      total: this.state.total - amount,
    })
  }

  // Save the current toal in the history
  saveTotal = () => {
    this.setState({
      history: [...this.state.history, this.state.total],
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p>Enter a number and click up or down. The total will increase or decrease by that amount.</p>
        <EnterNumber currentUp={this.up} currentDown={this.down} />
        <CurrentTotal total={this.state.total} saveTotal={this.saveTotal} />
        <p>Click save above to save the current total in the history</p>
        <h2>History</h2>
        <History history={this.state.history} />
      </div>
    );
  }
}

export default App;
