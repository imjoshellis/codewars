import { plusOne } from './plusOne'

it('increments [1]', () => {
  const test = [1]
  expect(plusOne(test)).toEqual([2])
})

it('increments [1,2,3]', () => {
  const test = [1, 2, 3]
  expect(plusOne(test)).toEqual([1, 2, 4])
})
