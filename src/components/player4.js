import React, { Component } from 'react';

class player4 extends Component {
  _handleTextChange = event => this.props.player4(event.target.value)
  render() {
    return (
        <input onChange={this._handleTextChange} type="text" id="player4" placeholder='Player 4..'/>
    );
  }
}

export default player4;