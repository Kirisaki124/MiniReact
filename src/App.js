import React, { Component } from 'react';
import './App.css';
import Inputs from "./components/Inputs";

class App extends Component {

  state = {
    player1: '',
    player2: '',
    player3: '',
    player4: '',
    players: ["", "", "", ""],
    login: true

  }
  _changePlayerName = (id, text) => {
    var newPlayers = [...this.state.players];
    newPlayers[id] = text;
    this.setState({ players: newPlayers });
  }

  changestate = () => {
    this.setState({ login: false })
  }

  render() {
    switch (this.state.login) {
      case true:
        return (
          <div className="App">
            <Inputs changePlayerName={this._changePlayerName} />
            <button onClick={this.changestate}> Start </button>
          </div>
        );
      case false:
        return (
          <h1>hello</h1>
        )
      default:
        return ""
    }
  }
}

export default App;
