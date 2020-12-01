// https://leetcode.com/problems/median-of-two-sorted-arrays/
export const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[]
): number => {
  const totalLen = nums1.length + nums2.length
  const testArr: number[] = []
  for (let i = 0; i < Math.ceil(totalLen / 2); i++) {
    if (!nums1[0]) {
      testArr.push(nums2[0])
    } else if (!nums2[0]) {
      testArr.push(nums1[0])
    } else {
      nums1[0] < nums2[0]
        ? testArr.push(nums1.shift()!)
        : testArr.push(nums2.shift()!)
    }
  }
  return totalLen % 2 === 0
    ? (testArr.pop()! + testArr.pop()!) / 2 || 0
    : testArr.pop()!
}
