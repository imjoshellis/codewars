// https://leetcode.com/problems/number-of-islands/
const numIslands = (grid: string[][]): number => {
  const outOfGrid = (x: number, y: number) =>
    x < 0 || y < 0 || x > grid.length - 1 || y > grid[0].length - 1

  const traverseLand = (x: number, y: number): boolean => {
    if (outOfGrid(x, y)) return true
    if (grid[x][y] === '0') return true
    grid[x][y] = '0'
    return (
      traverseLand(x, y + 1) &&
      traverseLand(x, y - 1) &&
      traverseLand(x + 1, y) &&
      traverseLand(x - 1, y)
    )
  }

  let count = 0
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === '1') {
        count++
        traverseLand(x, y)
      }
    }
  }

  return count
}

export { numIslands }
