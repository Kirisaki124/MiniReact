import React, { Component } from 'react';

class player1 extends Component {
    _handleTextChange = event => this.props.player1(event.target.value)
  render() {
    return (
        <input onChange={this._handleTextChange} type="text" id="player1" placeholder='Player 1..'/>
    );
  }
}

export default player1;