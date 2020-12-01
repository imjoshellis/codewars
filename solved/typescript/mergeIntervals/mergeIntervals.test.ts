import { merge } from './mergeIntervals'

it('solves leetcode', () => {
  const test = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ]

  const result = [
    [1, 6],
    [8, 10],
    [15, 18]
  ]

  expect(merge(test)).toEqual(result)
})

it.only('solves leetcode', () => {
  const test = [
    [1, 4],
    [2, 3]
  ]

  const result = [[1, 4]]

  expect(merge(test)).toEqual(result)
})
