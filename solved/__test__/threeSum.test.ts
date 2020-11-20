import { threeSum } from './threeSum'

it('handles empty array', () => {
  const test = [] as number[]
  expect(threeSum(test)).toEqual([])
})

it('handles short array', () => {
  const test = [-1, 0, 1]
  expect(threeSum(test)).toEqual([[-1, 0, 1]])
})

it('handles leetcode array', () => {
  const test = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
  const res = threeSum(test)
  expect(res).toContainEqual([-4, 0, 4])
  expect(res).toContainEqual([-4, 1, 3])
  expect(res).toContainEqual([-3, -1, 4])
  expect(res).toContainEqual([-3, 0, 3])
  expect(res).toContainEqual([-3, 1, 2])
  expect(res).toContainEqual([-2, -1, 3])
  expect(res).toContainEqual([-2, 0, 2])
  expect(res).toContainEqual([-1, -1, 2])
  expect(res).toContainEqual([-1, 0, 1])
})

it('handles leetcode array', () => {
  const test = [-1, 0, 1, 2, -1, -4]
  const res = threeSum(test)
  expect(res).toEqual([
    [-1, -1, 2],
    [-1, 0, 1]
  ])
})
