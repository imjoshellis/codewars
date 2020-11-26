import { rotate } from './rotate'

it('does nothing', () => {
  const test = [] as number[]
  rotate(test, 1)
  expect(test).toEqual([])
})

it('solves simple case', () => {
  const test = [1, 2, 3]
  rotate(test, 1)
  expect(test).toEqual([3, 1, 2])
})

it('solves second simple case', () => {
  const test = [1, 2, 3, 4, 5, 6]
  rotate(test, 10)
  expect(test).toEqual([3, 4, 5, 6, 1, 2])
})
