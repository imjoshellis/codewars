// https://leetcode.com/problems/product-of-array-except-self/
const productExceptSelf = (nums: number[]): number[] => {
  const len = nums.length
  const ans = new Array(len).fill(0)

  ans[0] = 1
  for (let i = 1; i < len; i++) {
    ans[i] = nums[i - 1] * ans[i - 1]
  }

  let r = 1
  for (let i = len - 1; i >= 0; i--) {
    ans[i] = ans[i] * r
    r *= nums[i]
  }

  return ans
}

export { productExceptSelf }
