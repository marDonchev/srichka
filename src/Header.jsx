import React from "react";
import logo from "./logo.svg";

const Header = props => {
    console.info("Header props", props);
    return (
        <div className="game_Header">
            <div className="game_Control">
                <i class="fa fa-refresh"></i>
            </div>
            <div>
                <img src={logo} className="game_Logo" alt="logo" />
            </div>
            <div className="game_Score">{props.score}</div>
        </div>
    );
};

export default Header;
