export const convertToTitle = (n: number): string => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (n === 0) return ''
  if (n <= 26) return letters[n - 1]
  let remainder = n % 26
  n = Math.floor(n / 26)
  if (remainder === 0) {
    n--
    remainder = 26
  }
  return convertToTitle(n) + letters[remainder - 1]
}
