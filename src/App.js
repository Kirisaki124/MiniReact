import React, { Component } from 'react';
import './App.css';
import Inputs from "./components/Inputs";
import Table from "./components/Table"

class App extends Component {

  state = {
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
          <div>
            <Table players = {this.state.players}/>
          </div>
        )
      default:
        return ""
    }
  }
}

export default App;
