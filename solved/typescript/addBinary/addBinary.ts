export const addBinary = (a: string, b: string, c: number = 0): string => {
  if (a.length === 0) return c > 0 ? addBinary(b, c.toString()) : b
  if (b.length === 0) return c > 0 ? addBinary(a, c.toString()) : a

  const aArr = [...a]
  const bArr = [...b]

  const aLast = parseInt(aArr.pop() || '0')
  const bLast = parseInt(bArr.pop() || '0')

  const sum = c + aLast + bLast
  if (sum < 2) return addBinary(aArr.join(''), bArr.join('')) + sum.toString()
  return addBinary(aArr.join(''), bArr.join(''), 1) + (sum - 2).toString()
}
