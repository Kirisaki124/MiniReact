import React, { Component } from 'react';
import Player from './Player';

class Inputs extends Component {
    render() {
        const playerInputs = Array.from({ length: 4 }).map((value, index) => <Player playerId={index} changePlayerName={this.props.changePlayerName} />);
        return (
            <div>
                {playerInputs}
            </div>
        );
    }
}
export default Inputs
