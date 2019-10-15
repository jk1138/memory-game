import React from "react";
import "./style.css";

function NavBar(props) {
    return <nav className="navbar fixed-top">
        <ul>
            <li className="brand">
                Gravity Falls Memory Game
            </li>
            <li className={props.messageClass}>
                {props.gameMessage}
            </li>
            <li id="score">
                Score: {props.score} | High Score: {props.highscore}
            </li>
        </ul>
    </nav>
}

export default NavBar