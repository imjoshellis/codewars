import { longestCommonPrefix } from '../longestCommonPrefix'

it('returns empty string if no matches', () => {
  const test = ['a', 'b', 'c']
  expect(longestCommonPrefix(test)).toBe('')
})

it('gives correct result for single letter match', () => {
  const test = ['apple', 'awesome', 'angry']
  expect(longestCommonPrefix(test)).toBe('a')
})

it('gives correct result for 3 letter match', () => {
  const test = ['apple', 'app', 'app']
  expect(longestCommonPrefix(test)).toBe('app')
})

it('returns blank string for [] input', () => {
  const test = [] as string[]
  expect(longestCommonPrefix(test)).toBe('')
})

it('returns blank string for [""] input', () => {
  const test = ['']
  expect(longestCommonPrefix(test)).toBe('')
})

it('returns correctly for single-letter and item input', () => {
  const test = ['a']
  expect(longestCommonPrefix(test)).toBe('a')
})

it('handles identical words', () => {
  const test = ['abc', 'abc', 'abc']
  expect(longestCommonPrefix(test)).toBe('abc')
})
