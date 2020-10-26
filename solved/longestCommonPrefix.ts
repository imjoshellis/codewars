export const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return ''

  const arr = [] as string[]
  let letter = ''

  while (true) {
    letter = strs[0][arr.length]
    for (let str of strs) {
      if (str === '') return ''
      if (str[arr.length] !== letter) return arr.join('')
    }
    arr.push(strs[0][arr.length])
    if (arr.length === strs[0].length) return arr.join('')
  }
}
