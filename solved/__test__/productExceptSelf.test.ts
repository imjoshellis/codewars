import { productExceptSelf } from './productExceptSelf'

it('solves trivial tuples', () => {
  expect(productExceptSelf([1, 2])).toEqual([2, 1])
  expect(productExceptSelf([3, 2])).toEqual([2, 3])
})

it('solves triples', () => {
  expect(productExceptSelf([1, 2, 3])).toEqual([6, 3, 2])
})
