import { generateMatrix } from '../solved/generateMatrix'
import { spiralOrder } from './spiralOrder'

it('does nothing', () => {
  expect(spiralOrder([[]])).toEqual([])
  expect(spiralOrder([])).toEqual([])
})

it('solves 1x1', () => {
  const test = [[1]]
  expect(spiralOrder(test)).toEqual([1])
})

it('solves 2x2', () => {
  const test = [
    [1, 2],
    [4, 3]
  ]
  expect(spiralOrder(test)).toEqual([1, 2, 3, 4])
})

it('solves 3x3', () => {
  const test = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]
  expect(spiralOrder(test)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

it('solves 4x3', () => {
  const test = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ]

  expect(spiralOrder(test)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
})

it('solves 1x3', () => {
  const test = [[1], [2], [3]]
  expect(spiralOrder(test)).toEqual([1, 2, 3])
})

it('solves 3x4', () => {
  const test = [
    [1, 2, 3],
    [10, 11, 4],
    [9, 12, 5],
    [8, 7, 6]
  ]

  expect(spiralOrder(test)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
})

it('solves 1x3', () => {
  const test = [[1, 2, 3]]
  expect(spiralOrder(test)).toEqual([1, 2, 3])
})

it('solves nxn', () => {
  const n = 23
  const test = generateMatrix(n)
  const arr = makeArray(n * n)
  expect(spiralOrder(test)).toEqual(arr)
})

const makeArray = (n: number) => [...Array(n)].map((_, i) => i + 1)
