// https://leetcode.com/problems/shortest-word-distance/
export const shortestWordDistance = (
  words: string[],
  word1: string,
  word2: string
): number => {
  const map = new Map()
  let min = null
  for (let [i, el] of words.entries()) {
    if (!map.has(el)) map.set(el, [])
    const temp = map.get(el)
    map.set(el, [...temp, i])
  }
  for (let i of map.get(word1)) {
    for (let j of map.get(word2)) {
      const diff = Math.abs(i - j)
      if (min === null || diff < min) min = diff
    }
  }
  return min || 0
}
