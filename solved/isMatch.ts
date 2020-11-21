// https://leetcode.com/problems/regular-expression-matching/
const eqOrDot = (a: string, b: string): boolean => a === b || b === '.'
const isStar = (a: string) => a === '*'

const isMatch = (s: string, p: string): boolean => {
  const memo = new Map<string, boolean>()

  const check = (si: number, pi: number): boolean => {
    const key = `${si}-${pi}`
    if (memo.has(key)) return memo.get(key)!
    if (si === s.length && pi === p.length) return true
    if (si > s.length) return false

    let result: boolean

    if (eqOrDot(s[si], p[pi])) {
      result = isStar(p[pi + 1])
        ? check(si, pi + 2) || check(si + 1, pi)
        : check(si + 1, pi + 1)
    } else {
      result = isStar(p[pi + 1]) ? check(si, pi + 2) : false
    }

    memo.set(key, result)
    return result
  }

  return check(0, 0)
}

export { eqOrDot, isStar, isMatch }
