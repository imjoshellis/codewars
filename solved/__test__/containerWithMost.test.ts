import { maxArea } from './containerWithMost'

it('accepts number[] and returns number', () => {
  const test = [1, 1]
  expect(maxArea(test)).toBe(1)
})

it('solves [4, 3, 2, 1, 4]', () => {
  const test = [4, 3, 2, 1, 4]
  expect(maxArea(test)).toBe(16)
})

it('solves [1,2,1]', () => {
  const test = [1, 2, 1]
  expect(maxArea(test)).toBe(2)
})
