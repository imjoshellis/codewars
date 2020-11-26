// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/
const containsDuplicate = (nums: number[]): boolean => {
  const map = new Map()
  for (const n of nums) {
    if (map.has(n)) return true
    map.set(n, true)
  }
  return false
}

export { containsDuplicate }
