// https://leetcode.com/problems/container-with-most-water/
export const maxArea = (height: number[]): number => {
  let max = 0,
    i = 0,
    j = height.length - 1

  while (i < j) {
    const width = j - i
    const area = Math.min(height[i], height[j]) * width
    max = Math.max(area, max)
    height[i] < height[j] ? i++ : j--
  }

  return max
}
