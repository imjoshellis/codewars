// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
export const letterCombinations = (digits: string): string[] => {
  const map: { [key: string]: string[] } = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let res = [] as string[]

  for (let digit of digits) {
    if (res.length === 0) {
      res = map[digit]
      continue
    }
    let temp = [] as string[]
    for (let char of map[digit]) {
      for (let i in res) {
        temp.push(res[i] + char)
      }
    }
    res = temp
  }

  return res
}
