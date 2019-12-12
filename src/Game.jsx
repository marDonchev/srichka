import React, { Component } from "react";
import Header from "./Header";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 10
        };
    }

    reset = () => {
        console.log("reset");
    };

    render() {
        console.info("Game state", this.state);
        return (
            <div className="game_Holder">
                <Header score={this.state.score} />
                <div className="game_Srichka">ГЖМЪЦ</div>
            </div>
        );
    }
}

export default Game;
