import { longestSubstring } from './longestSubstringWithout'

it('works for empty string', () => {
  const test = ''
  expect(longestSubstring(test)).toBe(0)
})

it('works for bbb', () => {
  const test = 'bbb'
  expect(longestSubstring(test)).toBe(1)
})

it('works for abc', () => {
  const test = 'abc'
  expect(longestSubstring(test)).toBe(3)
})

it('works for pwwkew', () => {
  const test = 'pwwkew'
  expect(longestSubstring(test)).toBe(3)
})
