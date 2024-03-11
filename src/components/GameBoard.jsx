const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
function GameBoard ({onSelect, turns}) {
  
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square, player} = turn
        const {row, col} = square
         gameBoard[row][col] = player
    }

   
    return(
        <ol id="game-board">
         { gameBoard.map((row, rowIndex) => <li key={rowIndex}> 
             <ol>
               { row.map((playerSelect, columnIndex) => <li key={columnIndex}>
                <button onClick={() => onSelect(rowIndex, columnIndex)}>{playerSelect}</button> 
                </li> )}
            </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;