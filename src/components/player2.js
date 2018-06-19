import React, { Component } from 'react';

class player2 extends Component {
  _handleTextChange = event => this.props.player2(event.target.value)
  render() {
    return (
        <input onChange={this._handleTextChange} type="text" id="player2" placeholder='Player 2..'/>
    );
  }
}

export default player2;