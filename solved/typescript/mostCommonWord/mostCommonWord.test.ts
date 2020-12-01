import { mostCommonWord } from './mostCommonWord'

it('does nothing', () => {
  const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'
  const banned = ['hit']

  expect(mostCommonWord(paragraph, banned)).toBe('ball')
})
