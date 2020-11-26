// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/674/
const intersect = (nums1: number[], nums2: number[]): number[] => {
  for (let i = 0; i < nums1.length; i++) {
    const j = nums2.indexOf(nums1[i])
    if (j === -1) nums1.splice(i--, 1)
    else nums2.splice(j, 1)
  }
  return nums1
}

export { intersect }
