// https://leetcode.com/problems/zigzag-conversion/
export const convert = (s: string, numRows: number): string => {
  numRows--
  const grid: string[][] = [[]]
  const ltrs = [...s]
  const pt = { x: 0, y: 0 }
  let down = true

  while (ltrs.length > 0) {
    if (!grid[pt.y]) grid[pt.y] = []
    grid[pt.y][pt.x] = ltrs.shift()!
    if (down && pt.y === numRows) down = false
    if (!down && pt.y === 0) down = true

    if (down) {
      pt.y++
    } else {
      pt.x++
      pt.y--
    }
  }

  console.table(grid)

  return grid.flat(1).join('')
}
