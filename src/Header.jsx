import React from "react";
import logo from "./logo.svg";

const Header = props => {
    console.info("Header props", props);
    return (
        <div className="game_Header">
            <div className="game_Control" onClick={props.handleReset}>
                <i className="fa fa-refresh"></i>
            </div>
            <div className="game_Level">
                <img src={logo} className="game_Logo" alt="logo" />
                <h2>Ниво: {props.level}</h2>
            </div>
            <div className="game_Score">{props.score}</div>
        </div>
    );
};

export default Header;
