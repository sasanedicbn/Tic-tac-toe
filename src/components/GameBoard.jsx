import { useState } from "react"
function GameBoard () {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    return(
        <ol id="game-board">
         { gameBoard.map((row, rowIndex) => <li key={rowIndex}> 
             <ol>
               { row.map((playerSelect, columnIndex) => <li key={columnIndex}>
                <button }>{playerSelect}</button> 
                </li> )}
            </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;