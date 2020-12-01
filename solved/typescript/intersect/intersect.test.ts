import { intersect } from './intersect'

it('does nothing', () => {
  const test1 = [1]
  const test2 = [1]
  expect(intersect(test1, test2)).toEqual([1])
})

it('solves easy case', () => {
  const test1 = [1, 2]
  const test2 = [1, 3]
  expect(intersect(test1, test2)).toEqual([1])
})

it('solves multiple of same numbers', () => {
  const test1 = [1, 2, 2]
  const test2 = [1, 3, 2]
  expect(intersect(test1, test2)).toEqual([1, 2])
})

it('solves multiple of same numbers', () => {
  const test1 = [1, 2, 2, 1]
  const test2 = [1, 3, 2, 1]
  expect(intersect(test1, test2)).toEqual([1, 2, 1])
})
