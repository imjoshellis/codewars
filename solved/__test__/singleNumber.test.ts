import { singleNumber } from './singleNumber'

it('returns a number when given an array of one number', () => {
  expect(singleNumber([1])).toBe(1)
  expect(singleNumber([2])).toBe(2)
})

it('returns 4 for [4, 1, 2, 1, 2]', () => {
  const test = [4, 1, 2, 1, 2]
  expect(singleNumber(test)).toBe(4)
})

it('returns 1 for [2, 1, 2]', () => {
  const test = [2, 1, 2]
  expect(singleNumber(test)).toBe(1)
})
