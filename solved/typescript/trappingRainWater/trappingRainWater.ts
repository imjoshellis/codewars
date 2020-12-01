// https://leetcode.com/problems/trapping-rain-water/
export const trap = (height: number[]): number => {
  let a = 0
  let b = height.length - 1
  let max = 0
  let leftmax = 0
  let rightmax = 0
  while (a <= b) {
    leftmax = Math.max(leftmax, height[a])
    rightmax = Math.max(rightmax, height[b])
    if (leftmax < rightmax) {
      max += leftmax - height[a]
      a++
    } else {
      max += rightmax - height[b]
      b--
    }
  }
  return max
}
