// https://leetcode.com/problems/most-common-word/
const mostCommonWord = (paragraph: string, banned: string[]): string => {
  const map: { [key: string]: number } = {}
  let words = paragraph
    .toLowerCase()
    .split(/[^a-zA-Z]+/)
    .filter(w => w && !banned.includes(w))

  let word: string
  let bestWord: string = words[0]
  let max = 0

  while (words.length) {
    word = words.pop()!
    map[word] = map[word] ? map[word] + 1 : 1
    if (map[word] > max) {
      bestWord = word
      max++
    }
  }
  return bestWord
}

export { mostCommonWord }
