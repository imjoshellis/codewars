import { criticalConnections } from './criticalConnections'

it('solves basic case', () => {
  const test = [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3]
  ]

  expect(criticalConnections(4, test)).toEqual([[1, 3]] || [[3, 1]])
})

it('solves harder case', () => {
  const test = [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
    [3, 4],
    [4, 5],
    [5, 3]
  ]

  expect(criticalConnections(6, test)).toEqual([[1, 3]] || [[3, 1]])
})
