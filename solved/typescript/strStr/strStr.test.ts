import { strStr } from '../strStr'

it('returns 0 for an empty needle', () => {
  const haystack = 'hello'
  const needle = ''
  expect(strStr(haystack, needle)).toBe(0)
})

it('returns -1 for an invalid needle', () => {
  const haystack = 'hello'
  const needle = 'z'
  expect(strStr(haystack, needle)).toBe(-1)
})

it('returns 2 for (hello, ll)', () => {
  const haystack = 'hello'
  const needle = 'll'
  expect(strStr(haystack, needle)).toBe(2)
})
