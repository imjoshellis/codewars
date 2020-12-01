export const maxSubArray = (nums: number[]): number => {
  if (nums.length === 0) return nums[0]
  let answer = nums[0],
    temp = 0
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > temp && temp < 0) temp = 0
    temp += nums[i]
    answer = Math.max(answer, temp)
  }
  return answer
}
