// https://leetcode.com/explore/featured/card/november-leetcoding-challenge/567/week-4-november-22nd-november-28th/3539/
// Don't judge me on the function name! LeetCode wrote it.
const lengthOfLongestSubstringTwoDistinct = (str: string): number => {
  /** initialize variables **/
  let preChar = '' // previous char
  let pre = 0 // count of previous char

  let curChar = '' // current char
  let cur = 0 // count of current char

  let max = 0 // max count so far

  /** loop over string **/
  for (let char of str) {
    // if char is equal to current char,
    // increase the current count
    if (char === curChar) {
      cur++
    }
    // otherwise, we're on a new char...
    else {
      // set the max
      max = Math.max(max, pre + cur)
      // if the new char is the same as the previous one,
      // we need to account for that with cur + pre in pre
      // otherwise, we just store cur in pre
      pre = preChar === char ? cur + pre : cur
      // cur starts at 1 because we've seen 1 char
      cur = 1
      // the current char is now previous
      preChar = curChar
      // char is now the current char
      curChar = char
    }
  }

  // check if max is the true max
  return Math.max(max, pre + cur)
}

export { lengthOfLongestSubstringTwoDistinct }
