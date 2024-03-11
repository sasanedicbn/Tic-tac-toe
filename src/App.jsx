import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { useState } from "react"

function deriveActivePlayer(gameTurns){
  console.log(gameTurns)
  let currentPlayer = 'X'

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = '0'
  }
  return currentPlayer
}
function App() {
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare (rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns
      ]
      return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelect={handleSelectSquare} turns={gameTurns}/>
       </div>
       <Log turns={gameTurns}/>
    </main>
  )
}

export default App
