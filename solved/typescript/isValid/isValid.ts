// https://leetcode.com/problems/valid-parentheses/
export const isValid = (s: string): boolean => {
  if (s.length % 2 !== 0) return false

  const map = new Map([
    ['{', '}'],
    ['(', ')'],
    ['[', ']']
  ])

  const stack = [] as string[]

  for (let el of [...s]) {
    if (map.has(el)) {
      stack.push(el)
    } else {
      if (map.get(stack.pop()) !== el) return false
    }
  }

  return stack.length === 0
}
