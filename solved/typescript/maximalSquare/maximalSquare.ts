// https://leetcode.com/problems/maximal-square/
const maximalSquare = (grid: string[][]): number => {
  const rows = grid.length
  const cols = rows > 0 ? grid[0].length : 0

  const dp: number[] = new Array(cols + 1).fill(0)
  let max = 0,
    prev = 0

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      const temp = dp[j]
      if (grid[i - 1][j - 1] === '1') {
        dp[j] = Math.min(Math.min(dp[j - 1], prev), dp[j]) + 1
        max = Math.max(max, dp[j])
      } else {
        dp[j] = 0
      }
      prev = temp
    }
  }

  return max * max
}

export { maximalSquare }
