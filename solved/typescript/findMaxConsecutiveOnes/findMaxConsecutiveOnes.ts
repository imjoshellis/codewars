// https://leetcode.com/explore/featured/card/fun-with-arrays/523/conclusion/3230/
const findMaxConsecutiveOnes = (nums: number[]): number => {
  let pre = 0
  let cur = 0
  let max = 0
  for (let n of nums) {
    if (n === 1) {
      cur++
    } else {
      max = Math.max(pre + cur, max)
      pre = cur + 1
      cur = 0
    }
  }
  return Math.max(pre + cur, max)
}

export { findMaxConsecutiveOnes }
