import React from "react";

const PlayerCard = props => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h5>Country: {props.country}</h5>
        </div>
    )
}

export default PlayerCard;