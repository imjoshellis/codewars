import { pascalTriangle } from './pascalTriangle'

it('does nothing', () => {
  const test = 1
  expect(pascalTriangle(test)).toEqual([[1]])
})

it('solves 3', () => {
  const test = 3
  const tri = [[1], [1, 1], [1, 2, 1]]
  expect(pascalTriangle(test)).toEqual(tri)
})

it('solves 4', () => {
  const test = 4
  const tri = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
  expect(pascalTriangle(test)).toEqual(tri)
})
