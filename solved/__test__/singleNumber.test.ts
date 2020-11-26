import { singleNumber } from './singleNumber'

it('does nothing', () => {
  const test = [1]
  expect(singleNumber(test)).toBe(1)
})

it('solves simple case', () => {
  const test = [1, 1, 2]
  expect(singleNumber(test)).toBe(2)
})

it('solves longer case', () => {
  const test = [1, 1, 2, 3, 3]
  expect(singleNumber(test)).toBe(2)
})
