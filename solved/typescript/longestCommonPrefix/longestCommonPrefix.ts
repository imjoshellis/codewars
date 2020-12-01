export const longestCommonPrefix = (arr: string[]): string => {
  let res = ''
  let cur = ''

  if (arr.length === 0) return res

  for (let i = 0; i < arr[0].length; i++) {
    cur = arr[0][i]
    for (const s of arr) {
      if (s[i] !== cur) return res
    }
    res += cur
  }

  return res
}
