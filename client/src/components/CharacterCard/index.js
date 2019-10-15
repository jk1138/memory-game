import React from "react";
import "./style.css"

const CharcterCard = props => (
    <div
        className={props.className}
        value={props.id}
        onClick={props.handleClick}
    >
        <img className="card-img" src={props.image} alt={props.name} />
    </div>

)

export default CharcterCard;