import React, { Component } from 'react';

class Player extends Component {
  _handleTextChange = event => this.props.changePlayerName(this.props.playerId, event.target.value)
  render() {
    return (
      <div>
        <input onChange={this._handleTextChange} type="text" placeholder={'Player ' + (this.props.playerId + 1)} />
      </div>
    );
  }
}

export default Player;