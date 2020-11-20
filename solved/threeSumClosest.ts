// https://leetcode.com/problems/3sum-closest/
export const threeSumClosest = (nums: number[], target: number): number => {
  nums = nums.sort((a, b) => a - b)
  let best: number = nums[0] + nums[1] + nums[2]
  let diff: number = Math.abs(target - best)
  for (let i = 0; i + 2 < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue

    let j = i + 1
    let k = nums.length - 1
    while (j < k) {
      const current = nums[i] + nums[j] + nums[k]
      const newDiff = Math.abs(target - current)

      if (newDiff < diff) {
        best = current
        diff = newDiff
      }

      if (current < target) {
        j++
      } else {
        k--
      }
    }
  }
  return best
}
