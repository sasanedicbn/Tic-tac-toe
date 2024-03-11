import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlater] = useState('X')

  function handleSelectSquare (rowIndex, colIndex) {
    setActivePlater((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' )
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X'
      if(currentPlayer.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = '0'
      }
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
        <GameBoard onSelect={handleSelectSquare} activePlayer={activePlayer}/>
       </div>
    </main>
  )
}

export default App
