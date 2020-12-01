// https://leetcode.com/problems/move-zeroes/solution/
const moveZeroes = (nums: number[]): void => {
  let zero = 0
  let numP = 0
  const len = nums.length - 1

  while (numP < len && zero < len) {
    while (nums[zero] !== 0 && zero < len) zero++
    numP = Math.max(zero + 1, numP)
    while (nums[numP] === 0) numP++
    if (numP > len) return
    nums[zero] = nums[numP]
    nums[numP] = 0
  }
}

export { moveZeroes }
