import React, { Component } from 'react';
import './App.css';
import Inputs from "./components/inputs";

class App extends Component {

  state = {
    player1: '',
    player2: '',
    player3: '',
    player4: ''
  }

  _player1 = text => {
    this.setState({player1: text})
  };
  _player2 = text => {
    this.setState({player2: text})
  };
  _player3 = text => {
    this.setState({player3: text})
  };
  _player4 = text => {
    this.setState({player4: text})
  };
  
  render() {
    function start1 (){
      start = false
    }
    var start = true;
    if (start){
      return (
        <div className="App">
           <Inputs player1={this._player1} player2={this._player2} player3={this._player3} player4={this._player4}/>
           <button onClick='start1()'> Start </button> 
        </div>
      );
    }
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

export default App;
