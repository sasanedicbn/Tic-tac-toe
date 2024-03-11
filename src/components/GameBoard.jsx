import { useState } from "react"
function GameBoard () {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquere(rowIndex, columnIndex){
        setGameBoard((prevGameBoard) => {
            console.log(prevGameBoard)
            const updateBoard = [...prevGameBoard.map((innerArray) => [...innerArray])]
            console.log(updateBoard)
            updateBoard[rowIndex][columnIndex] = 'X';
            return updateBoard
        } )
    }
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