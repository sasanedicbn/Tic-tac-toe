function GameBoard () {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]
    return(
        <ol id="game-board">
         { initialGameBoard.map((row, rowIndex) => <li key={rowIndex}>{row}
             <ol>
               { row.map((playerSelect, columnIndex) => <li key={columnIndex}><button>{playerSelect}</button> </li> )}
            </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;