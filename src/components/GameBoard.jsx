
function GameBoard ({onSelect, board}) {
    return(
        <ol id="game-board">
         { board.map((row, rowIndex) => <li key={rowIndex}> 
             <ol>
               { row.map((playerSelect, columnIndex) => <li key={columnIndex}>
                <button onClick={() => onSelect(rowIndex, columnIndex)} >{playerSelect}</button> 
                </li> )}
            </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;