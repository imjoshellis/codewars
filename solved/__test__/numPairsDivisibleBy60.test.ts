import { bigArr } from './bigArr'
import { numPairsDivisibleBy60 } from './numPairsDivisibleBy60'

it('solves leetcode', () => {
  const test = [30, 20, 150, 100, 40]
  expect(numPairsDivisibleBy60(test)).toBe(3)
})

it('solves big arr', () => {
  expect(numPairsDivisibleBy60(bigArr)).toBeDefined()
})
