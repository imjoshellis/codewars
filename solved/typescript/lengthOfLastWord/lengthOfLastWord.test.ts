import { lengthOfLastWord } from './lengthOfLastWord'

it('returns 0 for empty string', () => {
  const test = ''
  expect(lengthOfLastWord(test)).toBe(0)
})

it('returns 5 for "hello world', () => {
  const test = 'hello world'
  expect(lengthOfLastWord(test)).toBe(5)
})

it('handles trimming', () => {
  const test = 'a '
  expect(lengthOfLastWord(test)).toBe(1)
})
