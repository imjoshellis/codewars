// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/769/
const isValidSudoku = (board: string[][]): boolean => {
  const seen: { [key: string]: boolean } = {}
  const getBox = (i: number, j: number): number =>
    Math.floor(i / 3) + Math.floor(j / 3) * 3

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const n = parseInt(board[i][j])
      if (isNaN(n)) continue
      const b = getBox(i, j)
      const colKey = `col-${j}-${n}`
      const rowKey = `row-${i}-${n}`
      const boxKey = `box-${b}-${n}`
      if (seen[colKey] || seen[rowKey] || seen[boxKey]) return false
      seen[colKey] = true
      seen[rowKey] = true
      seen[boxKey] = true
    }
  }
  return true
}

export { isValidSudoku }
