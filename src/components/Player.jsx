import { useState } from "react";

const Player = ({name, symbol}) => {
    const [playerName, setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false)
    function handleEditClick () {
        setIsEditing((editing) => !editing)
    }
    return(
        <li>
            <span className="player">
             {isEditing ? <input type="text" required value={name}/> : <span className="player-name">{name}</span>}
             <span className="player-symbol">{symbol}</span>
            </span>
          <button onClick={handleEditClick}>Edit</button>
          </li>
    )
}
export default Player;