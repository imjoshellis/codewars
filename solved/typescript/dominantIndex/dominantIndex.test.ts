import { dominantIndex } from './dominantIndex'

it('does nothing', () => {
  const test = [] as number[]
  expect(dominantIndex(test)).toBe(-1)
})

it('handles simple false case', () => {
  const test = [1, 2, 3]
  expect(dominantIndex(test)).toBe(-1)
})

it('handles simple true case', () => {
  const test = [1, 2, 3, 6]
  expect(dominantIndex(test)).toBe(3)
})

it('handles complex true case', () => {
  const test = [1, 1, 3, 5, 12, 2, 3, 6]
  expect(dominantIndex(test)).toBe(4)
})
