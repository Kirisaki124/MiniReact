import React, { Component } from 'react';

class player3 extends Component {
  _handleTextChange = event => this.props.player3(event.target.value)
  render() {
    return (
        <input onChange={this._handleTextChange} type="text" id="player3" placeholder='Player 3..'/>
    );
  }
}

export default player3;