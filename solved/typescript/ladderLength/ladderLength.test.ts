import { ladderLength } from './ladderLength'

describe('ladderLength', () => {
  it('solves basic case', () => {
    const beginWord = 'hit'
    const endWord = 'dot'
    const wordList = ['hot', 'dot']

    expect(ladderLength(beginWord, endWord, wordList)).toBe(3)
  })

  it('solves second basic case', () => {
    const beginWord = 'hit'
    const endWord = 'cot'
    const wordList = ['hot', 'dot', 'cot']

    expect(ladderLength(beginWord, endWord, wordList)).toBe(3)
  })

  it('solves LeetCode scenario', () => {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']

    expect(ladderLength(beginWord, endWord, wordList)).toBe(5)
  })
})
