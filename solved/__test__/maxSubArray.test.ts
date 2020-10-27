import { maxSubArray } from './maxSubArray'

it('receives an array of number and outputs a number', () => {
  const test = [1]
  expect(maxSubArray(test)).toBe(1)
})

it('handles a small array', () => {
  const test = [-1, 2, 1]
  expect(maxSubArray(test)).toBe(3)
})
