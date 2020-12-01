// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1144/
const pivotIndex = (nums: number[]): number => {
  const len = nums.length
  if (len === 0) return -1
  if (len === 1) return 0
  let sum = nums.reduce((a, c) => a + c)
  let left = 0
  for (let [i, n] of nums.entries()) {
    if (sum - n === 2 * left) return i
    left += n
  }
  return -1
}

export { pivotIndex }
