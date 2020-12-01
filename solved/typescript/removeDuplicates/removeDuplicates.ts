// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
const removeDuplicates = (a: number[]): number => {
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] == a[i + 1]) a.splice(i--, 1)
  }
  return a.length
}

export { removeDuplicates }
