import { numIslands } from './numIslands'

it('solves base cases', () => {
  expect(numIslands([['1']])).toBe(1)
  expect(numIslands([['0']])).toBe(0)
})

it('solves 2x2 full of land or water', () => {
  const land = ['1', '1']
  const water = ['0', '0']
  expect(numIslands([land, land])).toBe(1)
  expect(numIslands([water, water])).toBe(0)
})

it('solves 2x2 with mixed terrain', () => {
  const land = ['1', '1']
  const water = ['0', '0']
  const checker = [
    ['1', '0'],
    ['0', '1']
  ]
  expect(numIslands([land, water])).toBe(1)
  expect(numIslands(checker)).toBe(2)
})

it('solves 2x3 with all land or all water', () => {
  const land = ['1', '1']
  const water = ['0', '0']
  expect(numIslands([[...land], [...land], [...land]])).toBe(1)
  expect(numIslands([water, water, water])).toBe(0)
})

it('solves 2x3 with mixed terrain', () => {
  const land = ['1', '1']
  const water = ['0', '0']
  const checker = [
    ['1', '0'],
    ['0', '1'],
    ['1', '0']
  ]
  expect(numIslands([[...land], water, [...land]])).toBe(2)
  expect(numIslands(checker)).toBe(3)
})
