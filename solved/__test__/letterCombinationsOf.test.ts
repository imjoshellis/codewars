import { letterCombinations } from './letterCombinationsOf'

it('does nothing', () => {
  const digits = ''
  expect(letterCombinations(digits)).toEqual([])
})

it('solves single numbers', () => {
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
  expect(letterCombinations('3')).toEqual(['d', 'e', 'f'])
  expect(letterCombinations('4')).toEqual(['g', 'h', 'i'])
  expect(letterCombinations('5')).toEqual(['j', 'k', 'l'])
  expect(letterCombinations('6')).toEqual(['m', 'n', 'o'])
  expect(letterCombinations('7')).toEqual(['p', 'q', 'r', 's'])
  expect(letterCombinations('8')).toEqual(['t', 'u', 'v'])
  expect(letterCombinations('9')).toEqual(['w', 'x', 'y', 'z'])
})

it('solves 2 digits', () => {
  const digits = '23'
  expect(letterCombinations(digits).length).toBe(9)
})
