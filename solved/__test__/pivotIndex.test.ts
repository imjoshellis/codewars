import { pivotIndex } from './pivotIndex'

it('does nothing', () => {
  const test = [] as number[]
  expect(pivotIndex(test)).toBe(-1)
})

it('handles basic case', () => {
  const test = [1]
  expect(pivotIndex(test)).toBe(0)
})

it('handles three nums', () => {
  const test = [1, 2, 1]
  expect(pivotIndex(test)).toBe(1)
})

it('handles four nums', () => {
  const test = [1, 2, 2, 1]
  expect(pivotIndex(test)).toBe(-1)
})

it('handles five nums', () => {
  const test = [1, 2, 2, 5, 5]
  expect(pivotIndex(test)).toBe(3)
})

it('handles negatives', () => {
  const test = [-1, 2, -1]
  expect(pivotIndex(test)).toBe(1)
})
