import { lengthOfLongestSubstringTwoDistinct } from './lengthOfLongestSubstringTwoDistinct'

it('passes basic test', () => {
  expect(lengthOfLongestSubstringTwoDistinct('aba')).toBe(3)
  expect(lengthOfLongestSubstringTwoDistinct('abc')).toBe(2)
  expect(lengthOfLongestSubstringTwoDistinct('')).toBe(0)
})
