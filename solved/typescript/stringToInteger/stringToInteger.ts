// https://leetcode.com/problems/string-to-integer-atoi/
export const myAtoi = (s: string): number => {
  const max = Math.pow(2, 31) - 1
  const min = 0 - Math.pow(2, 31)
  const n = isNaN(parseInt(s)) ? 0 : parseInt(s)
  if (n < min) return min
  if (n > max) return max
  return n
}
