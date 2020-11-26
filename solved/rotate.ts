// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/
const rotate = (nums: number[], k: number): void => {
  const l = nums.length
  k = k % l
  const temp = nums.splice(l - k, k)
  nums.unshift(...temp)
}

export { rotate }
