import { findMaxConsecutiveOnes } from './findMaxConsecutiveOnes'

it('solves', () => {
  expect(findMaxConsecutiveOnes([1, 0, 1])).toBe(3)
  expect(findMaxConsecutiveOnes([1, 1, 1])).toBe(3)
  expect(findMaxConsecutiveOnes([0, 0, 1])).toBe(2)
})
