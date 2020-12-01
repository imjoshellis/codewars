import { majorityElement } from './majorityElement'

it('returns correctly for single element array', () => {
  const test = [3]
  expect(majorityElement(test)).toBe(3)
})

it('returns correctly for small array', () => {
  const test = [3, 2, 2]
  expect(majorityElement(test)).toBe(2)
})

it('returns correctly', () => {
  const test = [2, 2, 1, 1, 1, 2, 2]
  expect(majorityElement(test)).toBe(2)
})
