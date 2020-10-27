export const singleNumber = (nums: number[]): number => {
  if (nums.length === 1) return nums[0]
  const map = new Map()

  for (let el of nums) {
    if (map.has(el)) {
      map.delete(el)
    } else {
      map.set(el, true)
    }
  }

  return map.keys().next().value
}
