// https://leetcode.com/explore/learn/card/array-and-string/202/introduction-to-2d-array
const findDiagonalOrder = (grid: number[][]): number[] => {
  const map = new Map()
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const key = row + col
      if (map.has(row + col)) {
        map.get(key).push(grid[row][col])
      } else {
        map.set(key, [grid[row][col]])
      }
    }
  }
  const result = [] as number[]
  map.forEach((arr, key) => {
    if (key % 2 === 0) {
      result.push(...arr.reverse())
    } else {
      result.push(...arr)
    }
  })
  return result
}

export { findDiagonalOrder }
