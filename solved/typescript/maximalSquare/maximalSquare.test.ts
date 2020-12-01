import { maximalSquare } from './maximalSquare'

it('solves trivial cases', () => {
  expect(maximalSquare([['1']])).toBe(1)
  expect(maximalSquare([['0']])).toBe(0)
})

it('solves simple 2x2 cases', () => {
  expect(
    maximalSquare([
      ['1', '0'],
      ['0', '0']
    ])
  ).toBe(1)
  expect(
    maximalSquare([
      ['1', '1'],
      ['1', '1']
    ])
  ).toBe(4)
})
