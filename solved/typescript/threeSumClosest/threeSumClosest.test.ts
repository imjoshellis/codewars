import { threeSumClosest } from './threeSumClosest'

it('finds simple solution', () => {
  const array = [1, 2, 3]
  const target = 6
  expect(threeSumClosest(array, target)).toBe(6)
})

it('finds simple solution', () => {
  const array = [1, 2, 3]
  const target = 7
  expect(threeSumClosest(array, target)).toBe(6)
})

it('finds leetcode solution', () => {
  const array = [-1, 2, 1, -4]
  const target = 1
  expect(threeSumClosest(array, target)).toBe(2)
})

it('finds leetcode solution', () => {
  const array = [0, 2, 1, -3]
  const target = 1
  expect(threeSumClosest(array, target)).toBe(0)
})

it('finds leetcode solution', () => {
  const array = [1, -3, 3, 5, 4, 1]
  const target = 1
  expect(threeSumClosest(array, target)).toBe(1)
})

it.only('finds leetcode solution', () => {
  const array = [1, 2, 5, 10, 11]
  const target = 12
  expect(threeSumClosest(array, target)).toBe(13)
})

it('finds leetcode solution', () => {
  const array = [1, 2, 4, 8, 16, 32, 64, 128]
  const target = 82
  expect(threeSumClosest(array, target)).toBe(82)
})
