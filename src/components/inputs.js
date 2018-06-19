import React, { Component } from 'react';
import Player1 from './player1'
import Player2 from './player2'
import Player3 from './player3'
import Player4 from './player4'

class input extends Component {
    _handleTextChange = event => console.log(event.target.value)

    render() {
        return (
            <div>
                <Player1 player1={this.props.player1}/> <br/>    
                <Player2 player2={this.props.player2}/> <br/>
                <Player3 player3={this.props.player3}/> <br/>
                <Player4 player4={this.props.player4}/> <br/>     
            </div>
        );
    }
}
export default input
