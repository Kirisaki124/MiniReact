import React, { Component } from 'react';

class Table extends Component {
    state = {
        numRound: 0
    }

  render() {
    const playerNames = Array.from({ length: 4 }).map((value, index) => <th>{this.props.players[index]}</th>)
    return (
      <div>
        <table id="table">
            <tr>
                <th></th>
                {playerNames}
            </tr>
            <tr>
                <th>Sum of score</th>
                <th id="player1Score"></th>
                <th id="player2Score"></th>
                <th id="player3Score"></th>
                <th id="player4Score"></th>
            </tr>
        </table>
      </div>
    );
  }
}

export default Table;