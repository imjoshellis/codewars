export const lengthOfLastWord = (arg: string): number => {
  let n = arg.length
  if (n === 0) return 0
  let count = 0
  for (let i = n - 1; i >= 0; i--) {
    if (arg[i] !== ' ') count++
    if (arg[i] === ' ' && count != 0) return count
  }
  return count
}
