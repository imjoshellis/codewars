// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/
const singleNumber = (nums: number[]): number => nums.reduce((a, c) => a ^ c, 0)

export { singleNumber }
