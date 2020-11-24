// amazon-interview-mock
const generateMatrix = (n: number): number[][] => {
  if (!n) return []
  let startRow = 0
  let endRow = n - 1
  let startColumn = 0
  let endColumn = n - 1
  let matrix: number[][] = []
  let counter = 1
  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      if (!matrix[startRow]) {
        matrix[startRow] = []
      }
      matrix[startRow][i] = counter++
    }
    startRow++
    for (let i = startRow; i <= endRow; i++) {
      if (!matrix[i]) {
        matrix[i] = []
      }
      matrix[i][endColumn] = counter++
    }
    endColumn--
    if (startRow <= endRow && startColumn <= endColumn) {
      for (let i = endColumn; i >= startColumn; i--) {
        if (!matrix[endRow]) {
          matrix[endRow] = []
        }
        matrix[endRow][i] = counter++
      }
      endRow--
      for (let i = endRow; i >= startRow; i--) {
        if (!matrix[i]) {
          matrix[i] = []
        }
        matrix[i][startColumn] = counter++
      }
      startColumn++
    }
  }
  return matrix
}

export { generateMatrix }
