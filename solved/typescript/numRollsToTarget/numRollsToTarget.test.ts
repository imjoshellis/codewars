import { numRollsToTarget } from './numRollsToTarget'

it('solves leetcode', () => {
  expect(numRollsToTarget(1, 6, 3)).toBe(1)
  expect(numRollsToTarget(2, 6, 7)).toBe(6)
})
