// amazon-interview-mock
const orangesRotting = (grid: number[][]): number => {
  const rows = grid.length
  const cols = rows > 0 ? grid[0].length : 0

  let max = 0
  let changed = true

  const hasRottenNeighbor = (
    i: number,
    j: number,
    tempGrid: number[][]
  ): boolean =>
    (tempGrid[i + 1] && tempGrid[i + 1][j] === 2) ||
    (tempGrid[i - 1] && tempGrid[i - 1][j] === 2) ||
    tempGrid[i][j + 1] === 2 ||
    tempGrid[i][j - 1] === 2

  while (changed) {
    changed = false
    const tempGrid: number[][] = [...grid].map(e => [...e])
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] % 2 === 0) continue
        if (hasRottenNeighbor(i, j, tempGrid)) {
          grid[i][j] = 2
          if (!changed) {
            max++
            changed = true
          }
        }
      }
    }
  }

  grid.forEach(el =>
    el.forEach(o => {
      if (o === 1) max = -1
    })
  )
  return max
}

export { orangesRotting }
