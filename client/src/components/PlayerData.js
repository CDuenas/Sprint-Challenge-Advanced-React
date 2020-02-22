import React from "react";
import PlayerCard from "./PlayerCard";


class PlayerData extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            .then(players => this.setState({ players }))
            .catch(err => console.log("Error: ", err))
        console.log(this.state);
    }




    render() {
        // console.log(this.state.players)
        return (
            <div className="App">
                {this.state.players.map(player => {
                    return (
                        <PlayerCard 
                        key={player.id}
                        name={player.name}
                        country={player.country}
                        />
                    )
                })}
            </div>
        )
    }
}

export default PlayerData;