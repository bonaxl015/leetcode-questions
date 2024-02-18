const gameOfLife = (board) => {
  let cols = board.length
  let rows = board[0].length
  let tempBoard = []

  function recurse(col, row) {
    if (row < 0 || row >= rows || col < 0 || col >= cols || board[col][row] === 0) {
      return 0
    }
    return 1
  }

  function countNeighbors(col, row) {
    return (recurse(col - 1, row - 1) + recurse(col - 1, row) +
    recurse(col - 1, row + 1) + recurse(col, row - 1) +
    recurse(col, row + 1) + recurse(col + 1, row - 1) +
    recurse(col + 1, row) + recurse(col + 1, row + 1))
  }

  for (let i = 0; i < cols; i++) {
    tempBoard[i] = []
    for (let j = 0; j < rows; j++) {
      const neighbors = countNeighbors(i, j)
      if (board[i][j] === 1) {
        if (neighbors >= 2 && neighbors <= 3) {
          tempBoard[i][j] = 1
        } else {
          tempBoard[i][j] = 0
        }
      } else {
        if (neighbors === 3) {
          tempBoard[i][j] = 1
        } else {
          tempBoard[i][j] = 0
        }
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      board[i][j] = tempBoard[i][j]
    }
  }
}

let input = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
console.log(gameOfLife(input))