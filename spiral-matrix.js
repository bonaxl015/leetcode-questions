const spiralOrder = (matrix) => {
  let res = []
  let up = 0
  let down = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  while (up <= down && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[up][i])
    }
    up++

    for (let i = up; i <= down; i++) {
      res.push(matrix[i][right])
    }
    right--

    if (!(left < right && up < down)) {
      break
    }

    for (let i = right; i >= left; i--) {
      res.push(matrix[down][i])
    }
    down--

    for (let i = down; i >= up; i--) {
      res.push(matrix[i][left])
    }
    left++
  }

  return res
}

let input = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(input))