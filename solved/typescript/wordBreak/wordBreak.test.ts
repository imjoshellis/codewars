import { wordBreak } from './wordBreak'

it('handles simple fail case', () => {
  const test = 'a'
  const dict = ['and']
  expect(wordBreak(test, dict)).toBe(false)
})

it('handles simple success case', () => {
  const test = 'and'
  const dict = ['and']
  expect(wordBreak(test, dict)).toBe(true)
})

it('handles simple success case', () => {
  const test = 'sand'
  const dict = ['s', 'and']
  expect(wordBreak(test, dict)).toBe(true)
})

it('handles applepenapple success case', () => {
  const test = 'applepenapple'
  const dict = ['apple', 'pen']
  expect(wordBreak(test, dict)).toBe(true)
})
