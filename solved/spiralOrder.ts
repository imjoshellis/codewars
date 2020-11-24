// https://leetcode.com/explore/learn/card/array-and-string/202/introduction-to-2d-array/1168/
const spiralOrder = (grid: number[][]): number[] => {
  const rows = grid.length
  if (rows === 0) return []
  const cols = grid[0].length
  let lt = 0,
    rt = cols - 1,
    tp = 0,
    bt = rows - 1,
    row = 0,
    col = -1,
    res = [] as number[]

  const add = (r: number, c: number) => res.push(grid[r][c])

  while (lt <= rt && tp <= bt) {
    while (col < rt) add(row, ++col)
    while (row < bt) add(++row, col)
    if (lt > --rt || ++tp > bt) return res

    while (col > lt) add(row, --col)
    while (row > tp) add(--row, col)
    if (++lt > rt || tp > --bt) return res
  }
  return res
}

export { spiralOrder }
