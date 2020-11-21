// https://leetcode.com/problems/word-ladder/

const makeNewWord = (w: string, i: number): string =>
  w.substring(0, i) + '*' + w.substring(i + 1, w.length)

const ladderLength = (
  beginWord: string,
  endWord: string,
  wordList: string[]
): number => {
  const l = beginWord.length
  const map: { [key: string]: string[] } = {}

  for (const word of wordList) {
    for (let i = 0; i < l; i++) {
      const newWord = makeNewWord(word, i)
      if (!map[newWord]) map[newWord] = []
      map[newWord].push(word)
    }
  }

  type NonEmpty<T> = T extends Array<infer U> ? U[] & { '0': U } : never
  const q: NonEmpty<Array<[string, number]>> = [[beginWord, 1]]
  const visited: { [key: string]: boolean } = { beginWord: true }

  while (q.length) {
    const node = q.shift()!
    const word = node[0]
    const level = node[1]
    for (let i = 0; i < l; i++) {
      const newWord = makeNewWord(word, i)
      for (const nextWord of map[newWord] || []) {
        if (nextWord === endWord) return level + 1
        if (!visited[nextWord]) {
          visited[nextWord] = true
          q.push([nextWord, level + 1])
        }
      }
    }
  }
  return 0
}

export { ladderLength }
