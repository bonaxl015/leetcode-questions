const setZero = (matrix) => {
  let rows = matrix[0].length
  let cols = matrix.length
  let obj = {
    horizontal: new Set([]),
    vertical: new Set([])
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (matrix[i][j] === 0) {
        obj.horizontal.add(j)
        obj.vertical.add(i)
      }
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (obj.horizontal.has(j) || obj.vertical.has(i)) {
        matrix[i][j] = 0
      }
    }
  }

  return matrix
}

let input = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
console.log(setZero(input))
