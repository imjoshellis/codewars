// https://leetcode.com/problems/3sum/
export const threeSum = (nums: number[]): number[][] => {
  nums = nums.sort((a: number, b: number) => a - b)
  let res: number[][] = []

  for (let i = 0; i + 2 < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i - 1] === nums[i]) continue

    let j = i + 1,
      k = nums.length - 1
    while (j < k) {
      if (nums[j] + nums[k] + nums[i] === 0) {
        res.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] === nums[j - 1]) j++
        while (j < k && nums[k] === nums[k + 1]) k--
      } else if (nums[j] + nums[k] + nums[i] > 0) {
        k--
        while (j < k && nums[k] === nums[k + 1]) k--
      } else {
        j++
        while (j < k && nums[j] === nums[j - 1]) j++
      }
    }
  }

  return res as number[][]
}
