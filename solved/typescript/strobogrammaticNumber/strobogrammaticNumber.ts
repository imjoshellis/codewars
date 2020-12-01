// https://leetcode.com/problems/strobogrammatic-number/
export const isStrobogrammatic = (num: string): boolean => {
  const map = new Map([
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['9', '6'],
    ['8', '8']
  ])
  const test = []

  for (let el of [...num]) {
    if (!map.has(el)) return false
    test.push(map.get(el))
  }

  return num === test.reverse().join('')
}
