// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/
const dominantIndex = (nums: number[]): number => {
  const [max, idx] = nums.reduce((a, c, i) => (a[0] > c ? a : [c, i]), [0, 0])
  const isDominant = nums.filter(n => n <= max / 2).length === nums.length - 1
  return isDominant ? idx : -1
}

export { dominantIndex }
