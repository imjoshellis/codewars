// https://leetcode.com/problems/valid-anagram/
export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false

  const a = [...s].sort()
  const b = [...t].sort()

  while (a.length > 0) {
    if (a.pop() !== b.pop()) return false
  }
  return true
}
