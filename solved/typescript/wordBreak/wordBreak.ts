// https://leetcode.com/problems/word-break/
const wordBreak = (s: string, wordDict: string[]): boolean => {
  const dict = new Set(wordDict)
  const visited = new Set()
  visited.
  const q = [0]

  while (q.length) {
    const start = q.shift()!
    if (visited.has(start)) continue

    for (let end = start + 1; end <= s.length; end++) {
      const sub = s.substring(start, end)
      if (dict.has(sub)) {
        if (end === s.length) return true
        q.push(end)
      }
    }

    visited.add(start)
  }
  return false
}
export { wordBreak }
