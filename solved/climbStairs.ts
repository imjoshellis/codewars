// https://leetcode.com/problems/climbing-stairs/
const climbStairs = (n: number) => {
  const memo = Array(n + 1).fill(null)
  return recurse(n, 0, memo)
}

const recurse = (n: number, i: number, memo: number[]): number => {
  if (i === n) return 1
  if (i > n) return 0
  if (memo[i] > 0) {
    return memo[i]
  }
  memo[i] = recurse(n, i + 1, memo) + recurse(n, i + 2, memo)
  return memo[i]
}

export { climbStairs }
